import React, { useState, useEffect, useCallback } from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Input,
  Placeholder,
} from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux'
import { callTiposInmuebles } from '../../../store/tipos_inmuebles';
import { callEstados } from '../../../store/estados';
import { callCiudades } from '../../../store/ciudades';
import { callFranquicias } from '../../../store/franquicias';


const FiltrosDropdown = ({tipoInmueble,onBuscar, onClean}) => {
   const tipos_inmuebles = useSelector((state) => state.tipos_inmuebles);
   const estados = useSelector((state) => state.estados);
   const ciudades = useSelector((state) => state.ciudades);
   const franquicias = useSelector((state) => state.franquicias);

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [ciudadesOptions, setCiudadesOptions] = useState(ciudades.ciudades || []);
  const dispatch                             = useDispatch()

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const [numBanios, setnumBanios] = useState('');
  const handlenumBaniosChange = (e) => {
    setnumBanios(e.target.value);
  };

  const [minMtsCuadrados, setMinMtsCuadrados] = useState('');
  const handleMinMtsCuadrados = (e) => {
    setMinMtsCuadrados(e.target.value);
  };

  const [maxMtsCuadrados, setMaxMtsCuadrados] = useState('');
  const handleMaxMtsCuadrados = (e) => {
    setMaxMtsCuadrados(e.target.value);
  };

  const [minHabitaciones, setMinHabitaciones] = useState('');
  const handleMinHabitaciones = (e) => {
    setMinHabitaciones(e.target.value);
  };

  const [maxHabitaciones, setMaxHabitaciones] = useState('');
  const handleMaxHabitaciones = (e) => {
    setMaxHabitaciones(e.target.value);
  };

  const [numPstoStacionamiento, setnumPstoStacionamiento] = useState('');
  const handlenumPstoStacionamientoChange = (e) => {
    setnumPstoStacionamiento(e.target.value);
  };

  const [estadoFilter, setEstadoFilter] = useState(null);
  const handleEstado = (e) => {
    const inputValue = e.target.value
    const ciudades_ = ciudades.ciudades
    if(inputValue ===0){
      setCiudadesOptions(ciudades_)
    } else if (ciudades_ && inputValue !==0) {
      const options = ciudades_.filter((item,index)=>item.estado.id.toString() === inputValue)
      setCiudadesOptions(options)
    } else {
      setCiudadesOptions([])
    }

    setEstadoFilter(inputValue);
  };

  const [ciudadFilter, setCiudadFilter] = useState(null);
  const handleCiudad = (e) => {
    setCiudadFilter(e.target.value);
  };

  const [franquiciaFilter, setFranquiciaFilter] = useState(null);
  const handleFranquicia = (e) => {
    setFranquiciaFilter(e.target.value);
  };

  const [inicio_precio, setInicioPrecioFilter] = useState(null);
  const handleInicioPrecio = (e) => {
    setInicioPrecioFilter(e.target.value);
  };

  const [fin_precio, setFinPrecio] = useState(null);
  const handleFinPrecio = (e) => {
    setFinPrecio(e.target.value);
  };
  
  const handleClear = () => {
    onClean()
    setnumBanios('')
    setnumPstoStacionamiento('')
    setEstadoFilter(0)
    setCiudadFilter(0)
    setFranquiciaFilter(0)
    setInicioPrecioFilter('')
    setFinPrecio('')    
    setMinHabitaciones('')
    setMaxHabitaciones('')
    setMinMtsCuadrados('')
    setMaxHabitaciones('')
  }

  const handleSubmit = () => {
    onBuscar({
      tipo_inmueble: tipoInmueble,
      ciudad: ciudadFilter,
      estado: estadoFilter,
      franquicia: franquiciaFilter,
      inicio_precio: inicio_precio,
      fin_precio: fin_precio,
      banios: numBanios,
      ptos_estacionamiento: numPstoStacionamiento,
      minHabitaciones,
      maxHabitaciones,
      minMtsCuadrados,
      maxMtsCuadrados
    })
  };

  const loadData = useCallback(() => {
    dispatch(callTiposInmuebles())
    dispatch(callEstados())
    dispatch(callCiudades())
    dispatch(callFranquicias())
  },[dispatch])

  useEffect(() => {
		loadData()
	}, [loadData]);

  function listaTiposInmuebles() {
    if(tipos_inmuebles.results){
      return <>
        <option value={0} defaultValue={null}>Todos</option>
        <>
          {tipos_inmuebles.results.map((tipo_inmueble, index) => (
            <option key={index} value={tipo_inmueble.id}>{tipo_inmueble.nombre}</option>
          ))}
        </>
      </>
    } else return null
  }

  function listaCiudades() {

    if(ciudades.results){
      return <>
        <option value={0} defaultValue={null}>Todos</option>
        <>
          {ciudadesOptions.map((ciudad, index) => (
            <option key={index} value={ciudad.id}>{ciudad.nombre}</option>
          ))}
        </>
      </>
    } else return null
  }

  function listaEstados() {
    if(estados.estados){
      return <>
        <option value={0} defaultValue={null}>Todos</option>
        <>
          {(estados?.estados?.results || []).map((estado, index) => (
            <option key={index} value={estado.id}>{estado.nombre}</option>
          ))}
        </>
      </>
    } else return null
  }

  function listaFranquicias() {
    if(franquicias.results){
      return <>
        <option value={0} defaultValue={null}>Todos</option>
        <>
          {franquicias.results.map((franquicia, index) => (
            <option key={index} value={franquicia.id}>{franquicia.nombre}</option>
          ))}
        </>
      </>
    } else return null
  }

  return (
    <Dropdown
      isOpen={dropdownOpen}
      autoClose={false}
      toggle={toggleDropdown}>
      <DropdownToggle className='inmo_button' caret>
        Filtros
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem header>Franquicia</DropdownItem>
        <DropdownItem toggle={false}>
          <Input
              value={franquiciaFilter}
              onChange={handleFranquicia}
              name="select"
              type="select">
              {
                listaFranquicias()
              }
          </Input>
        </DropdownItem>
        <DropdownItem header>Estado</DropdownItem>
        <DropdownItem toggle={false}>
          <Input
              value={estadoFilter}
              onChange={handleEstado}
              name="select"
              type="select">
              {
                listaEstados()
              }
          </Input>
        </DropdownItem>
        <DropdownItem header>Ciudad</DropdownItem>
        <DropdownItem toggle={false}>
          <Input
              value={ciudadFilter}
              onChange={handleCiudad}
              name="select"
              type="select">
              {
                listaCiudades()
              }
          </Input>
        </DropdownItem>
        <DropdownItem header>Numero de Baños</DropdownItem>
        <DropdownItem toggle={false}>
          <Input
            type="number"
            placeholder='1'
            value={numBanios}
            onChange={handlenumBaniosChange}
          />
        </DropdownItem>
        <DropdownItem header>Numero de puestos de estacionamiento</DropdownItem>
        <DropdownItem toggle={false}>
          <Input
            placeholder='2'
            type="number"
            value={numPstoStacionamiento}
            onChange={handlenumPstoStacionamientoChange}
          />
        </DropdownItem>
        <DropdownItem header>Metros de Construccion</DropdownItem>
        <DropdownItem toggle={false} className='d-flex'>
            <Input
              type="number"
              value={minMtsCuadrados}
              onChange={handleMinMtsCuadrados}
              style={{marginRight:5}}
              placeholder='Desde'
            />

            <Input
              type="number"
              value={maxMtsCuadrados}
              onChange={handleMaxMtsCuadrados}
              placeholder='Hasta'
              style={{marginLeft:5}}
            />
        </DropdownItem>
        <DropdownItem header>Habitaciones</DropdownItem>
        <DropdownItem toggle={false} className='d-flex'>
            <Input
              type="number"
              value={minHabitaciones}
              onChange={handleMinHabitaciones}
              style={{marginRight:5}}
              placeholder='Desde'
            />

            <Input
              type="number"
              value={maxHabitaciones}
              onChange={handleMaxHabitaciones}
              placeholder='Hasta'
              style={{marginLeft:5}}
            />
        </DropdownItem>
        <DropdownItem header>Precio</DropdownItem>
        <DropdownItem toggle={false} className='d-flex'>
            <Input
              type="number"
              value={inicio_precio}
              onChange={handleInicioPrecio}
              style={{marginRight:5}}
              placeholder='Desde'
            />

            <Input
              type="number"
              value={fin_precio}
              onChange={handleFinPrecio}
              placeholder='Hasta'
              style={{marginLeft:5}}
            />
        </DropdownItem>
        <DropdownItem divider />
        <DropdownItem 
          className='d-flex justify-content-between'>
            <button onClick={handleSubmit} className='btn btn_block inmo_button secundario'>
                Buscar
            </button>
            <button onClick={handleClear} className='btn btn_block inmo_button secundario'>
                Limpiar
            </button>            
          </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );


};

export default FiltrosDropdown;
