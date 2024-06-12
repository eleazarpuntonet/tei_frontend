import React from 'react';
import './InfoSection.css';
import { InfoComponent } from '../../components'
import { assets } from '../../assets'
export const InfoSection = () =>{
    return (
        <>
            <section className='info_section'>
                <div className='container'>
                    <ul>
                        <li>
                            <InfoComponent 
                                value       = '+4'
                                description = 'Proyectos Primarios'>
                                <img className='icon_info' alt='proyectos logo' src={assets.proyectos_primarios}></img>
                            </InfoComponent>
                        </li>
                        <li>
                            <InfoComponent 
                                value       = '+10'
                                description = 'Alquileres'>
                                <img className='icon_info' alt='alquileres logo' src={assets.alquileres}></img>
                            </InfoComponent>
                        </li>
                        <li>
                            <InfoComponent 
                                value       = '+15'
                                description = 'Propiedades'>
                                <img className='icon_info' alt='propiedades logo' src={assets.propiedades}></img>
                            </InfoComponent>
                        </li>
                        <li>
                            <InfoComponent 
                                value       = '+2'
                                description = 'Cierres'>
                                <img className='icon_info' alt='cierres' src={assets.cierres}></img>
                            </InfoComponent>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    )
}