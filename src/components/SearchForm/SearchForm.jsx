import React, { useState, useEffect, useCallback } from 'react';
import './SearchForm.css';
import { SearchItems } from '../SearchItems/SearchItems';
import {  callSearchPropiedades  } from '../../store/dataState';
import { callTiposNegociacion } from '../../store/tipos_negociacion';
import {ErrorLogComponent} from '../../components/ErrorLogComponent/ErrorLogComponent'
import { useSelector, useDispatch } from 'react-redux'
import { Loader } from '../TemplateMainComponent/components/Loader';
import {  searchPropiedad,cleanSearchPropiedad  } from '../../store/dataState';
import FiltrosDropdown from './components/FiltrosDropdown';

export const SearchForm = () =>{
	const propiedadesStore = useSelector((state) => state.data);
	const tipos_inmuebles = useSelector((state) => state.tipos_inmuebles);
    const [ texto, setTexto ] = useState('')
    const [ tipoInmueble, setTipoInmueble] = useState(0)
  const dispatch = useDispatch()

	const loadData = useCallback(() => {
        let texto_filtro  = propiedadesStore.propiedadSearchFilters?.text
        let tipo_inmueble  = propiedadesStore.propiedadSearchFilters?.tipo_inmueble
        setTexto(texto_filtro || '')
        setTipoInmueble(tipo_inmueble)
        dispatch(callSearchPropiedades(propiedadesStore.propiedadSearchFilters))
        dispatch(callTiposNegociacion())
    },[
        dispatch,
        propiedadesStore.propiedadSearchFilters
    ])

    const onBuscar = (valorInput) => {
        dispatch(searchPropiedad({
            text:texto,
            tipo_inmueble: tipoInmueble,
            ...valorInput
        }))
    };
    const handleKeydown = (event) => {
        if (event.key === 'Enter') {
            dispatch(searchPropiedad({
                text:texto,
                tipo_inmueble: tipoInmueble,
            }))
            // dispatch(callSearchPropiedades(propiedadesStore.propiedadSearchFilters))
          }
    };
    const onClean = (valorInput) => {
        dispatch(cleanSearchPropiedad())
        // setTexto('')
        // setTipoInmueble(0)
    };
    const handleClick = (event) => {
        dispatch(
            searchPropiedad({text:texto,tipo_inmueble:tipoInmueble})
        )
    };

	useEffect(() => {
		loadData()
	}, [loadData]);
    return(
        <>
            <div className="container-fluid py-5">
                <div className="container py-5">
                    <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{maxWidth: '600px'}}>
                        <h1 className="mb-0">{}</h1>
                    </div>
                    <div className="row results_box">
                        <div className="col-6">
                            <input 
                                type      = "text"
                                id        = "texto"
                                onChange = {(e)=>{setTexto(e.target.value)}}
                                name      = "texto"
                                value     = {texto}
                                onKeyDown = {handleKeydown}
                                style={{fontWeight:'bold'}}
                                className = "form-control" 
                                placeholder="Ingresa una o más ubicaciones o características (Ej: Piscina)"/>                            
                        </div>
                        <div className="col-3">
                            <select 
                                onChange = {(e)=>{setTipoInmueble(e.target.value)}}
                                value    = {tipoInmueble}
                                className="form-control select_filter">
                                <option defaultValue={null} >Todos</option>
                                {
                                    tiposInmueblesOptions()
                                }
                            </select>
                        </div>
                        <div className="col-3 d-flex">
                            <FiltrosDropdown 
                                tipoInmueble={tipoInmueble} 
                                onClean={onClean}
                                onBuscar={onBuscar}>
                            </FiltrosDropdown>
                            <button onClick={handleClick} className='btn inmo_button secundario'>
                                Buscar
                            </button>
                        </div>
                    </div>
                    {
                        (!propiedadesStore.isLoading) ? (
                            (propiedadesStore.error) ? (
                                <ErrorLogComponent 
                                    msg={propiedadesStore.error}>
                                </ErrorLogComponent>
                            ) : (
                                (propiedadesStore.searchResults.results && propiedadesStore.searchResults.results.length > 0) ? (
                                    propiedadesStore.searchResults.results.map((propiedad, index)=>(
                                        <SearchItems 
                                            propiedad={propiedad} 
                                            key={index}>
                                        </SearchItems>
                                    ))
                                ) : (
                                    <ErrorLogComponent 
                                        msg='No se encontraron resultados'>
                                    </ErrorLogComponent>
                                )
                            )
                        ) : (
                            <Loader></Loader>
                        )
                    }
                </div>
            </div>
        </>
    )

    function tiposInmueblesOptions() {
        if(tipos_inmuebles.tipos_inmuebles){
            return tipos_inmuebles.tipos_inmuebles.map((tipo_inmueble, index) => (
                <option
                    key={index}
                    value={tipo_inmueble.id}>
                    {tipo_inmueble.nombre}
                </option>
            ))
        } else {
            return null
        }

    }

 }