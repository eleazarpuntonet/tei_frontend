import React from "react";
import {  useDispatch } from 'react-redux'
import { assets } from "../../../assets";
import { CaracteristicaComponent } from "../../CaracteristicaComponent/CaracteristicaComponent";
import {  selectPropiedad  } from '../../../store/dataState';
import { useNavigate } from 'react-router-dom';
import { route_INMUEBLE } from '../../../constants'

export const InmuebleMini = ({inmueble}) =>{
	const dispatch = useDispatch()
    const navigate = useNavigate();

    const handleClick = (propiedad) => () => {
		dispatch(selectPropiedad(propiedad))
        navigate(route_INMUEBLE)
    }

	// useEffect(() => {
	// 	loadData()
	// }, [loadData]);


    return(
        <>
            <div onClick={handleClick(inmueble)} className="blog-item bg-light rounded overflow-hidden">
                <div className="blog-img position-relative overflow-hidden text-center">
                    {(inmueble?.imagenes?.length > 0) ? (
                        <img
                            src={inmueble.imagenes[0].image} 
                            alt="" 
                            style={{width: '100%',height:'100%',objectFit:'cover'}}>
                        </img>

                    ) : (
                        <img  src={assets.dummypreview} alt="" style={{width: '100%',height:'100%',objectFit:'fill'}}></img>
                    )}
                    {/* <a className="position-absolute top-0 start-0 text-white rounded-end mt-5 py-2 px-4" href="" style={{backgroundColor: '#ee7623', textDecoration: 'none'}}>
                        {inmueble.tipo_inmueble.nombre}
                    </a> */}
                </div>
                <div className="p-4 inmueble_body" style={{backgroundColor: '#303335'}}>
                    <h4 className="mb-3">{inmueble.nombre}</h4>
                    {
                        inmueble.tipo_inmueble &&
                        <p><span>Tipo de Inmueble:</span>{inmueble.tipo_inmueble.nombre}</p>
                    }
                    <p><span>Precio</span> <span className="precio-span">{inmueble.precio} $</span></p>
                    <p><span>Caracteristicas</span></p>
                    <div className="d-flex mb-3 container_char">
                        <CaracteristicaComponent 
                            color='#fff' 
                            superficie={inmueble.metros_cuadrados_construccion}>
                        </CaracteristicaComponent>
                        <CaracteristicaComponent 
                            color='#fff' 
                            banios={inmueble.numero_banios}>
                        </CaracteristicaComponent>
                        <CaracteristicaComponent 
                            color='#fff' 
                            estacionamientos={inmueble.ptos_estacionamiento}>
                        </CaracteristicaComponent>
                        <CaracteristicaComponent 
                            color='#fff' 
                            habitaciones={inmueble.habitaciones}>
                        </CaracteristicaComponent>
                    </div>


                </div>
            </div>
        </>
    )
}