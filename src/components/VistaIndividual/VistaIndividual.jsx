import React, { useState, useEffect, useCallback } from 'react';
import './VistaIndividual.css'
import { 
	Navbar, 
	Foot,
} from '../../components/TemplateMainComponent/components'
import { assets, ShareNodes,Heart, Trash, Calendar } from "../../assets";
import { CaracteristicaComponent } from '../CaracteristicaComponent/CaracteristicaComponent';
import { useSelector } from 'react-redux'
import {ErrorLogComponent} from '../../components/ErrorLogComponent/ErrorLogComponent'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const obj = {
    uso_de_inmueble         : 'Residencial',
    tipo_de_inmueble        : 'Apartamento',
    amoblado                : 'Si',
    años_de_construccion    : 'Lorem Ipsum',
    superficie              : 'Lorem Ipsum',
    plantas                 : 'Lorem Ipsum',
    numero_plantas          : 'Lorem Ipsum',
    caracteristicas         : 'Lorem Ipsum Dolot It Met, Lorem Ipsum Dolot It Met',
    areas_comunes           : 'Lorem Ipsum Dolot It Met, Lorem Ipsum Dolot It Met',
    price: 1500,
    currency: '$',
    type: 'Alquiler'
}

export const VistaIndividual = ()=> {
	const propiedadIndividual = useSelector((state) => state.data.propiedadSelection);
	useEffect(() => {
		console.log(propiedadIndividual)
        if(propiedadIndividual !== null){
            obj.type             = propiedadIndividual.tipo_inmueble?.nombre
            obj.tipo_de_inmueble = propiedadIndividual.tipo_inmueble?.nombre
            obj.areas_comunes    = propiedadIndividual.descripcion
            obj.caracteristicas  = propiedadIndividual.descripcion
            obj.numero_plantas   = propiedadIndividual.numero_plantas
            obj.plantas          = propiedadIndividual.numero_plantas
            obj.superficie       = propiedadIndividual.metros_cuadrados_terreno
        }
	},);
    return(
        <>
            <Navbar alwaysVisible={true}></Navbar>
            {(propiedadIndividual !== null) ? (
                <section id="seccioIndividual" className="container individual">
                    <div className="row">
                        <div className="col-12">
                            <nav aria-label="breadcrumb">
                                {/* <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="#">Aparamentos</a></li>
                                    <li className="breadcrumb-item"><a href="#">Alquiler</a></li>
                                    <li className="breadcrumb-item" >Area Metropolitana</li>
                                    <li className="breadcrumb-item"><a href="#">Municipio Chacao</a></li>
                                    <li className="breadcrumb-item"><a href="#">El Rosal</a></li>
                                    <li className="breadcrumb-item" aria-current="page">Apartamento en el Rosal, Res Atrium</li>
                                </ol> */}
                            </nav>
                        </div>
                        <div className="col-8">
                            <div className="titulo">
                                <h2>
                                    {propiedadIndividual.nombre}
                                </h2>
                            </div>
                            <div className="direccion">
                                {propiedadIndividual.direccion} {propiedadIndividual.estado.nombre}                       
                            </div>
                            <div className="slide">
                                <div id="carruselImagenesPropiedades" className="carousel slide" data-bs-ride="carousel">
                                    <div className="carousel-indicators">
                                        {(propiedadIndividual.imagenes.length > 0) && (
                                            propiedadIndividual.imagenes.map((imagen, index)=>(
                                                (index === 0) ? (
                                                    <button 
                                                        key={index}
                                                        type="button" 
                                                        data-bs-target="#carouselExampleIndicators" 
                                                        data-bs-slide-to={index} 
                                                        className="active" 
                                                        aria-current="true" 
                                                        aria-label="Slide">
                                                    </button>
                                                ) :
                                                (
                                                    <button 
                                                        key={index}
                                                        type="button" 
                                                        data-bs-target="#carouselExampleIndicators" 
                                                        data-bs-slide-to={index} 
                                                        aria-label="Slide 2">
                                                    </button>
                                                )                                     
                                            ))
                                        )}                                        
                                    </div>
                                    <div className="carousel-inner">
                                        {(propiedadIndividual.imagenes.length > 0) ? (
                                            propiedadIndividual.imagenes.map((imagen, index)=>(
                                                (index === 0) ? (
                                                    <div key={index} className="carousel-item active">
                                                        <img src={imagen.image} className="d-block w-100"></img>
                                                    </div>
                                                ) :
                                                (
                                                    <div key={index} className="carousel-item">
                                                        <img src={imagen.image} className="d-block w-100"></img>
                                                    </div>
                                                )                                     
                                            ))
                                        ) : (
                                            <div className="carousel-item active">
                                                <img src={assets.dummypreview} className="d-block w-100"></img>
                                            </div>
                                        )}                                        
                                    </div>
                                    <button 
                                        className="carousel-control-prev" 
                                        type="button" 
                                        data-bs-target="#carruselImagenesPropiedades" 
                                        data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Siguiente</span>
                                    </button>
                                    <button 
                                        className="carousel-control-next" 
                                        type="button" 
                                        data-bs-target="#carruselImagenesPropiedades" 
                                        data-bs-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Previo</span>
                                    </button>
                                </div>
                            </div>
                            <div className="descripcion">
                                <div className="des_titulo info_title">
                                    <h2>Descripción</h2>
                                </div>
                                <div className="desc_body">
                                <div
                                    dangerouslySetInnerHTML={{ __html: propiedadIndividual.descripcion }}/>
                                </div>  
                                {/* <div className="des_mapa info_title">
                                    <h2>
                                        Conoce los alrededores del inmueble
                                    </h2>
                                </div> */}
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="title_price">
                                <div className="priceBox">
                                    <div className="price">
                                        {obj.currency}{propiedadIndividual.precio_usd}
                                    </div>
                                    <div className="d-flex f-row justify-content-lg-between">
                                        <div className="tipe">
                                            {propiedadIndividual.tipo_inmueble?.nombre}
                                        </div>
                                        {/* <div className="socials">
                                            <div className="icon_share">
                                                <Heart/>
                                            </div>
                                            <div className="icon_share">
                                                <ShareNodes/>
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                            <div className="tabsInfo">
                                <ul className="nav nav-tabs nav-fill" id="inmuebleInfo" role="tablist">
                                    <li 
                                        className="nav-item" 
                                        role="presentation">
                                        <button 
                                            className             = "nav-link active"
                                            id                = "home-tab"
                                            data-bs-toggle    = "tab"
                                            data-bs-target    = "#DATOS"
                                            type              = "button"
                                            role              = "tab"
                                            aria-controls     = "home-tab-pane"
                                            aria-selected     = "true">DATOS
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button 
                                            className             = "nav-link"
                                            id                = "profile-tab"
                                            data-bs-toggle    = "tab"
                                            data-bs-target    = "#CONTACTO"
                                            type              = "button"
                                            role              = "tab"
                                            aria-controls     = "profile-tab-pane"
                                            aria-selected     = "false">AREAS COMUNES
                                        </button>
                                    </li>
                                </ul>
                                <div className="tab-content" id="inmuebleInfoContent">
                                    <div 
                                        className             = "tab-pane fade show active mb-5"
                                        id                = "DATOS"
                                        role              = "tabpanel"
                                        aria-labelledby   = "home-tab"
                                        tabIndex          = "0">
                                            <div className="panel_char">
                                                <CaracteristicaComponent 
                                                    color='#fff' 
                                                    superficie={propiedadIndividual.metros_cuadrados_construccion}>    
                                                </CaracteristicaComponent>
                                                <CaracteristicaComponent 
                                                    color='#fff' 
                                                    banios={propiedadIndividual.numero_banios}>
                                                </CaracteristicaComponent>
                                                <CaracteristicaComponent 
                                                    color='#fff' 
                                                    estacionamientos={propiedadIndividual.ptos_estacionamiento}>
                                                </CaracteristicaComponent>
                                                <CaracteristicaComponent 
                                                    color='#fff' 
                                                    habitaciones={propiedadIndividual.habitaciones}>
                                                </CaracteristicaComponent>                                        
                                            </div>
                                            <div className="separador">
                                            </div>
                                            <div className="detallesInmueble">
                                                {propiedadIndividual.numero_banios !== undefined &&
                                                    <div className="item_detalle">
                                                        <div className="title">Número de Baños</div>
                                                        <div className="body">{propiedadIndividual.numero_banios}</div>
                                                    </div>
                                                }
                                                {propiedadIndividual.habitaciones !== undefined &&
                                                    <div className="item_detalle">
                                                        <div className="title">Habitaciones</div>
                                                        <div className="body">{propiedadIndividual.habitaciones}</div>
                                                    </div>
                                                }
                                                {propiedadIndividual.numero_plantas !== undefined &&
                                                    <div className="item_detalle">
                                                        <div className="title">Número de Plantas</div>
                                                        <div className="body">{propiedadIndividual.numero_plantas}</div>
                                                    </div>
                                                }
                                                {propiedadIndividual.precio &&
                                                    <div className="item_detalle">
                                                        <div className="title">Precio</div>
                                                        <div className="body">{propiedadIndividual.precio}</div>
                                                    </div>
                                                }
                                                {propiedadIndividual.metros_cuadrados_terreno &&
                                                    <div className="item_detalle">
                                                        <div className="title">Metros Cuadrados de Terreno</div>
                                                        <div className="body">{propiedadIndividual.metros_cuadrados_terreno}</div>
                                                    </div>
                                                }
                                                {propiedadIndividual.metros_cuadrados_construccion &&
                                                    <div className="item_detalle">
                                                        <div className="title">Metros Cuadrados de Construcción</div>
                                                        <div className="body">{propiedadIndividual.metros_cuadrados_construccion}</div>
                                                    </div>
                                                }
                                                {propiedadIndividual.metraje_total &&
                                                    <div className="item_detalle">
                                                        <div className="title">Metraje Total</div>
                                                        <div className="body">{propiedadIndividual.metraje_total}</div>
                                                    </div>
                                                }
                                                {propiedadIndividual.ptos_estacionamiento !== undefined &&
                                                    <div className="item_detalle">
                                                        <div className="title">Puntos de Estacionamiento</div>
                                                        <div className="body">{propiedadIndividual.ptos_estacionamiento}</div>
                                                    </div>
                                                }
                                                
                                            </div>
                                    </div>
                                    <div 
                                        className          = "tab-pane fade"
                                        id                = "CONTACTO"
                                        role              = "tabpanel"
                                        aria-labelledby   = "profile-tab"
                                        tabIndex          = "0">
                                            <div className="panel_char">
                                                <CaracteristicaComponent 
                                                    color='#fff' 
                                                    superficie={propiedadIndividual.metros_cuadrados_construccion}>    
                                                </CaracteristicaComponent>
                                                <CaracteristicaComponent 
                                                    color='#fff' 
                                                    banios={propiedadIndividual.numero_banios}>
                                                </CaracteristicaComponent>
                                                <CaracteristicaComponent 
                                                    color='#fff' 
                                                    estacionamientos={propiedadIndividual.ptos_estacionamiento}>
                                                </CaracteristicaComponent>
                                                <CaracteristicaComponent 
                                                    color='#fff' 
                                                    habitaciones={propiedadIndividual.habitaciones}>
                                                </CaracteristicaComponent>                                        
                                            </div>
                                            <div className="separador">
                                            </div>
                                            <div className="detallesInmueble">
                                                {propiedadIndividual.posee_hipoteca !== null &&
                                                    <div className="item_detalle">
                                                        <div className="title">Posee Hipoteca</div>
                                                        <div className="body">{propiedadIndividual.posee_hipoteca ? 'SÍ' : 'NO'}</div>
                                                    </div>
                                                }
                                                {propiedadIndividual.family_room !== null &&
                                                    <div className="item_detalle">
                                                        <div className="title">Family Room</div>
                                                        <div className="body">{propiedadIndividual.family_room ? 'SÍ' : 'NO'}</div>
                                                    </div>
                                                }
                                                {propiedadIndividual.cubiculo !== null &&
                                                    <div className="item_detalle">
                                                        <div className="title">Cubículo</div>
                                                        <div className="body">{propiedadIndividual.cubiculo ? 'SÍ' : 'NO'}</div>
                                                    </div>
                                                }
                                                {propiedadIndividual.estudio !== null &&
                                                    <div className="item_detalle">
                                                        <div className="title">Estudio</div>
                                                        <div className="body">{propiedadIndividual.estudio ? 'SÍ' : 'NO'}</div>
                                                    </div>
                                                }
                                                {propiedadIndividual.lavadero !== null &&
                                                    <div className="item_detalle">
                                                        <div className="title">Lavadero</div>
                                                        <div className="body">{propiedadIndividual.lavadero ? 'SÍ' : 'NO'}</div>
                                                    </div>
                                                }
                                                {propiedadIndividual.terraza_jardin !== null &&
                                                    <div className="item_detalle">
                                                        <div className="title">Terraza/Jardín</div>
                                                        <div className="body">{propiedadIndividual.terraza_jardin ? 'SÍ' : 'NO'}</div>
                                                    </div>
                                                }
                                                {propiedadIndividual.meletero_bodega !== null &&
                                                    <div className="item_detalle">
                                                        <div className="title">Maletero/Bodega</div>
                                                        <div className="body">{propiedadIndividual.meletero_bodega ? 'SÍ' : 'NO'}</div>
                                                    </div>
                                                }
                                                {propiedadIndividual.tanque_agua !== null &&
                                                    <div className="item_detalle">
                                                        <div className="title">Tanque de Agua</div>
                                                        <div className="body">{propiedadIndividual.tanque_agua ? 'SÍ' : 'NO'}</div>
                                                    </div>
                                                }
                                                {propiedadIndividual.planta_electrica !== null &&
                                                    <div className="item_detalle">
                                                        <div className="title">Planta Eléctrica</div>
                                                        <div className="body">{propiedadIndividual.planta_electrica ? 'SÍ' : 'NO'}</div>
                                                    </div>
                                                }
                                                {/* Add more fields as needed */}
                                            </div>
                                            <div className="separador">
                                            </div>
                                            <div className="caracteristicasInmueble">
                                                {
                                                    (propiedadIndividual.franquicia) &&
                                                    <div className="item_detalle">
                                                        <div className="title">
                                                            Franquicia
                                                        </div>
                                                        <div className="body">
                                                            <span>
                                                                {propiedadIndividual.franquicia.nombre}
                                                            </span>
                                                        </div>                                                
                                                    </div>
                                                }
                                                {
                                                    (propiedadIndividual.asesor) &&
                                                    <div className="item_detalle">
                                                        <div className="title">
                                                            Asesor
                                                        </div>
                                                        <div className="body">
                                                            <span>
                                                                {propiedadIndividual.asesor.full_name}
                                                            </span>
                                                        </div>                                                
                                                    </div>
                                                }
                                            </div>
                                    </div>                                    
                                </div>                          
                            </div>      
                            <div className="publi_container">
                            </div>                  
                        </div>
                    </div>
                </section>
            ) : (
                <ErrorLogComponent></ErrorLogComponent>
            )}            
            <Foot></Foot>        
        </>
    )
}