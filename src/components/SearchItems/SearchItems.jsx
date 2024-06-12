import React from "react";
import './SearchItems.css';
import { CaracteristicaComponent } from '../CaracteristicaComponent/CaracteristicaComponent';
// import { WhatsApp } from "@mui/icons-material";
import { assets } from "../../assets"; 
import WhatsApp from "../../assets/icons/SVG/WhatsApp";
import { MeGusta } from '../../assets/icons/SVG/MeGusta';
import {  useDispatch } from 'react-redux'
import {  selectPropiedad  } from '../../store/dataState';
import { useNavigate } from 'react-router-dom';
import { route_INMUEBLE } from '../../constants'



export const SearchItems = ({propiedad}) => {
    const navigate = useNavigate();
	const dispatch = useDispatch()

    const handleClick = (propiedad) => () => {
		dispatch(selectPropiedad(propiedad))
        navigate(route_INMUEBLE)
    }
    return(
        <>
            <div onClick={handleClick(propiedad)} className="search_item row g-0 box_item">
                <div className="col-4 image_prev_result">
                    {
                        (propiedad.imagenes.length > 0) ? (
                            <img src={propiedad.imagenes[0].image} alt='imagen vista previa' className="full-image"></img>
                        ) : (
                            <img src={assets.dummypreview} alt='imagen vista previa' className="full-image"></img>
                        )
                    }
                </div>
                <div className="col-8 dataItem">
                    <div className="header f-row">
                        <span>
                            {propiedad.nombre}
                        </span>
                        <span>
                            $ {propiedad.precio_usd}
                        </span>
                    </div>
                    <div className="subtitle">
                        <span>
                            Dirección: {propiedad.direccion}
                        </span>
                    </div>
                    <div className="ubicacion">
                        <span>
                            {propiedad.estado.nombre} / Venezuela | {propiedad.ciudad.nombre}
                        </span>
                        <span>
                            Tipo Inmueble: {propiedad.tipo_inmueble.nombre}
                        </span>
                    </div>
                    <div className="caracteristicas f-row" style={{color: 'black'}}>
                        <CaracteristicaComponent superficie={propiedad.metros_cuadrados_construccion}></CaracteristicaComponent>
                        <CaracteristicaComponent banios={propiedad.numero_banios}></CaracteristicaComponent>
                        <CaracteristicaComponent estacionamientos={propiedad.ptos_estacionamiento}></CaracteristicaComponent>
                        <CaracteristicaComponent habitaciones={propiedad.habitaciones}></CaracteristicaComponent>
                    </div>
                    <div className="descripcion" dangerouslySetInnerHTML={{ __html: propiedad.descripcion.length > 300 ? propiedad.descripcion.slice(0, 300) + '...' : propiedad.descripcion }}>
                    </div>
                    <div className="card_footer f-row">
                        {/* <img id="logo_COLOR" src={assets.logo_color} className={`logo`} alt="logo"></img> */}
                        <WhatsApp fill="#ee7623"/>
                        <MeGusta fill="#ee7623"></MeGusta>
                        <div className="btn inmo_button terciario contact_button"> Contactar </div>
                    </div>
                </div>
            </div>
        </>
    )
}