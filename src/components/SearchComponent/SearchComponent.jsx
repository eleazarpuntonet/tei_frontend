import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import './SearchComponent.css'
import { route_BUSQUEDA } from '../../constants'
import {  searchPropiedad  } from '../../store/dataState';
import { callTiposInmuebles } from '../../store/tipos_inmuebles';



export const SearchComponent = () => {
	const tipos_inmuebles               = useSelector((state) => state.tipos_inmuebles);
	const [inputSearchText, setSearchText]     = useState('');
	const [ tiponegociacion, setTipoNegociacion] = useState(0);
	const [ tipoInmueble, setTipoInmueble ]    = useState(0)
	const navigate                             = useNavigate();
	const dispatch                             = useDispatch()
  
    const handleChange = (event) => {
      setSearchText(event.target.value);
    };
  
    const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
        if(inputSearchText.length > 2){
            dispatch(searchPropiedad({text:inputSearchText,tipo_inmueble: tipoInmueble}))
            navigate(route_BUSQUEDA)
        }
      }
    };

    const selectedTabSection = (index) => () => {
        setTipoNegociacion(index)
    }

    const loadData = useCallback(() => {
		dispatch(callTiposInmuebles())
	},[dispatch])
	
	useEffect(() => {
		loadData()
        // console.log(tipos_inmuebles.searchResults)
	}, [loadData]);


    return (
        <>
            {(tipos_inmuebles.results !== undefined) && (
                <div className='searchContainer'>
                    <nav>
                        <div className="nav nav-tabs" id="nav-tab" role="tablist">
                            <button 
                                onClick={selectedTabSection(1)}
                                className      = {'nav-link ' + (tiponegociacion === 0 ? ' active':' ')}
                                id             = "search_alquiler-tab"
                                data-bs-toggle = "tab"
                                data-bs-target = "#search_alquiler"
                                type           = "button"
                                role           = "tab"
                                aria-controls  = "search_alquiler"
                                aria-selected  = "true">Alquilar
                            </button>
                            <button 
                                onClick={selectedTabSection(2)}
                                className      = "nav-link" 
                                id             = "nav-profile-tab" 
                                data-bs-toggle = "tab" 
                                data-bs-target = "#nav-profile" 
                                type           = "button" 
                                role           = "tab" 
                                aria-controls  = "nav-profile" 
                                aria-selected  = "false">Comprar
                            </button>
                            <button 
                                onClick={selectedTabSection(3)}
                                className      = "nav-link" 
                                id             = "nav-contact-tab" 
                                data-bs-toggle = "tab" 
                                data-bs-target = "#nav-contact" 
                                type           = "button" 
                                role           = "tab" 
                                aria-controls  = "nav-contact" 
                                aria-selected  = "false">Proyectos Primarios
                            </button>
                        </div>
                    </nav>
                    <div className="tab-content" id="nav-tabContent">
                        <div 
                            className       = "fade show active tab-pane" 
                            id              = "search_alquiler" 
                            role            = "tabpanel" 
                            aria-labelledby = "search_alquiler-tab">
                                    <div className="input_container">
                                        <div className='filter'>
                                                <select 
                                                    onChange = {(e)=>{setTipoInmueble(e.target.value)}}
                                                    value    = {tipoInmueble}
                                                    className="form-control select_filter">
                                                    <option value={0} defaultValue={null} >Todos</option>
                                                    {
                                                        tipos_inmuebles.results.map((tipo_inmueble, index)=>(
                                                            <option key={index} value={tipo_inmueble.id}>{tipo_inmueble.nombre}</option>
                                                        ))
                                                    }                                    
                                                </select>
                                        </div>
                                        <div className='text'>
                                            <input 
                                                type      = "text"
                                                id        = "inputSearchText"
                                                name      = "inputSearchText"
                                                value     = {inputSearchText}
                                                onChange  = {handleChange}
                                                onKeyDown = {handleKeyDown}
                                                className = "form-control" 
                                                placeholder="Ingresa una o más ubicaciones o características (Ej: Piscina)"/>
                                        </div>                        
                                    </div>
                        </div>
                        <div 
                            className       = "fade tab-pane"
                            id              = "nav-profile"
                            role            = "tabpanel"
                            aria-labelledby = "nav-profile-tab">
                                <div className="input_container">
                                    <div className='filter'>
                                    {
                                        (tipos_inmuebles.results !== undefined) && (
                                            <select className="form-control select_filter">
                                                <option value={0} defaultValue>Todos</option>
                                                {
                                                    tipos_inmuebles.results.map((tipo_inmueble, index)=>(
                                                        <option key={index} value={tipo_inmueble.id}>{tipo_inmueble.nombre}</option>
                                                    ))
                                                }                                    
                                        </select>
                                        )                                   
                                    }
                                    </div>
                                    <div className='text'>
                                        <input 
                                            type      = "text"
                                            id        = "inputSearchText"
                                            name      = "inputSearchText"
                                            value     = {inputSearchText}
                                            onChange  = {handleChange}
                                            onKeyDown = {handleKeyDown}
                                            className = "form-control" 
                                            placeholder="Ingresa una o más ubicaciones o características (Ej: Piscina)"/>
                                    </div>
                                </div>
                        </div>
                        <div 
                            className       = "fade tab-pane"
                            id              = "nav-contact"
                            role            = "tabpanel"
                            aria-labelledby = "nav-contact-tab">
                                <div className="input_container">
                                    <div className='filter'>
                                    {
                                        (tipos_inmuebles.results !== undefined) && (
                                            <select className="form-control select_filter">
                                                <option value={0} defaultValue>Todos</option>
                                                {
                                                    tipos_inmuebles.results.map((tipo_inmueble, index)=>(
                                                        <option key={index} value={tipo_inmueble.id}>{tipo_inmueble.nombre}</option>
                                                    ))
                                                }                                    
                                        </select>
                                        )                                   
                                    }
                                    </div>
                                    <div className='text'>
                                        <input 
                                            type      = "text"
                                            id        = "inputSearchText"
                                            name      = "inputSearchText"
                                            value     = {inputSearchText}
                                            onChange  = {handleChange}
                                            onKeyDown = {handleKeyDown}
                                            className = "form-control" 
                                            placeholder="Ingresa una o más ubicaciones o características (Ej: Piscina)"/>
                                    </div>  
                                </div>
                        </div>
                    </div>
                </div>
            )}

        </>
    )
}