import React from 'react';
import './CaracteristicaComponent.css';
import {  HabitacionesSVG, SuperficieSVG } from '../../assets';
import { BañosSVG} from '../../assets';
import { EstacionamientoSVG } from '../../assets/icons/SVG/Estacionamiento';
export const CaracteristicaComponent = ({
        superficie      ,
        banios          ,
        estacionamientos,
        habitaciones,
        color    
    }) => {
    
    return (
        <>
            <div className='caracteristicas_container f-row'>
                { !!banios && (
                    <div  className='f-row char_item'>
                        <div className='char_img'>
                            <BañosSVG fill={color}></BañosSVG>
                        </div>
                        <div className="text_char">
                            <span className='pre'>
                                {banios}
                            </span>
                            <span className='post'>
                                Bañ
                            </span>
                        </div>
                    </div>
                )}

                { !!superficie && (
                    <div  className='f-row char_item'>
                        <div className='char_img'>
                            <SuperficieSVG fill={color}></SuperficieSVG>
                        </div>
                        <div className="text_char">
                            <span className='pre'>
                                {superficie}
                            </span>
                            <span className='post'>
                                mts
                            </span>
                        </div>
                    </div>                    
                )}

                { !!estacionamientos && (
                    <div  className='f-row char_item'>
                        <div className='char_img'>
                            <EstacionamientoSVG fill={color}></EstacionamientoSVG>
                        </div>
                        <div className="text_char">
                            <span className='pre'>
                                {estacionamientos}
                            </span>
                            <span className='post'>
                                Estacio.
                            </span>
                        </div>
                    </div>
                )}

                { !!habitaciones && (
                    <div  className='f-row char_item'>
                        <div className='char_img'>
                            <HabitacionesSVG fill={color}></HabitacionesSVG>
                        </div>
                        <div className="text_char">
                            <span className='pre'>
                                {habitaciones}
                            </span>
                            <span className='post'>
                                Hab
                            </span>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}