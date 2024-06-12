import React from 'react';
import './DestacadosSection.css';
import { InmueblePreviaComponent, PaginacionComponent } from '../../components'
import { assets } from '../../assets';

export const DestacadosSection = ({titulo, bgcolor}) => {
    return (
        <>
            <section className='destacados_section' style={{backgroundColor: bgcolor}}>
                <div className='container'>
                    <div className='header text_title'>
                        <h2>{titulo}</h2>
                    </div>
                    <div className='body_previas f-row'>
                        <InmueblePreviaComponent
                            titulo           = 'Chacao Residencias Atrium.'
                            subtitulo        = 'Direccion: El Rosal, Municipio Chacao.'
                            imgPreview       = {assets.dummypreview}
                            superficie       = '1500'
                            banios           = '2'
                            estacionamientos = '2'
                            habitaciones     = '2'
                            precio           = '1.500.000'
                            pisos            = '4'
                            tipo             = 'Obra Gris'
                            ubicacion        = 'Caracas / Venezuela'>
                        </InmueblePreviaComponent>
                        <InmueblePreviaComponent
                            titulo           = 'Chacao Residencias Atrium.'
                            subtitulo        = 'Direccion: El Rosal, Municipio Chacao.'
                            imgPreview       = {assets.dummypreview}
                            superficie       = '1500'
                            banios           = '2'
                            estacionamientos = '2'
                            habitaciones     = '2'
                            precio           = '1.500.000'
                            pisos            = '4'
                            tipo             = 'Obra Gris'
                            ubicacion        = 'Caracas / Venezuela'>
                        </InmueblePreviaComponent>
                        <InmueblePreviaComponent
                            titulo           = 'Chacao Residencias Atrium.'
                            subtitulo        = 'Direccion: El Rosal, Municipio Chacao.'
                            imgPreview       = {assets.dummypreview}
                            superficie       = '1500'
                            banios           = '2'
                            estacionamientos = '2'
                            habitaciones     = '2'
                            precio           = '1.500.000'
                            pisos            = '4'
                            tipo             = 'Obra Gris'
                            ubicacion        = 'Caracas / Venezuela'>
                        </InmueblePreviaComponent>
                    </div>
                    <div className='paginacion_container f-row'>
                        <button className='btn inmo_button secundario'>
                            VER MÁS
                        </button>
                        {/* <PaginacionComponent></PaginacionComponent> */}
                    </div>
                </div>
            </section>
        </>
    )
}