import React from 'react';
import './InmueblePreviaComponent.css'
import { CaracteristicaComponent } from '../../components';

export const InmueblePreviaComponent = ({
        titulo, 
        subtitulo,
        imgPreview, 
        superficie, 
        banios, 
        estacionamientos,
        habitaciones, 
        precio, 
        pisos, 
        tipo, 
        ubicacion}) =>{
    return (
        <>
            <div className='vistaprevia_container f-col'>
                <div className='header_previa f-col'>
                    <div className='title'>
                        <h3>{titulo}</h3>
                    </div>
                    <div className='sub_title'>
                        <h5>{subtitulo}</h5>
                    </div>
                </div>
                <div className='body f-col'>
                    <div className='image'>
                        <img src={imgPreview} alt='imagen vista previa'></img>
                    </div>
                    <div className='description f-col'>
                        <p className='_bold direccion interlined'>{ubicacion}</p>
                        <p><span className='_bold interlined'>Tipo de Inmueble:</span> {tipo}</p>
                        <div className='caracteristicas f-col'>
                            <div className='_bold interlined'>Caracteristicas:</div>
                            <div className='content interlined f-row'>
                                <CaracteristicaComponent superficie={superficie}></CaracteristicaComponent>
                                <CaracteristicaComponent banios={banios}></CaracteristicaComponent>
                                <CaracteristicaComponent estacionamientos={estacionamientos}></CaracteristicaComponent>
                                <CaracteristicaComponent habitaciones={habitaciones}></CaracteristicaComponent>
                            </div>
                        </div>
                        <p className='interlined'>N# Pisos: {pisos}</p>
                    </div>
                </div>
                <div className='footer f-col'>
                    <span className='_bold'>$ {precio}</span>
                </div>
            </div>
        </>
    )
}