import React from "react";
import { assets } from "../../../assets";
export const Datos = () =>{
    return (
        <>
            {/* Inicio Datos */}
            <div className="container-fluid facts pt-lg-0">
                <div className="container py-2 pt-lg-0">
                    <div className="row gx-0">
                        <div className="col-lg-3 wow zoomIn" data-wow-delay="0.1s">
                            <div className="bg-terciary shadow d-flex align-items-center justify-content-center p-4" style={{height: "150px"}}>
                                <div className="d-flex align-items-center justify-content-center rounded mb-2" style={{height:"60px0", width:"60px"}}>
                                    <img className='icon_info' alt='proyectos logo' src={assets.proyectos_primarios}></img>
                                </div>
                                <div className="ps-4">
                                    <h5 className="text-white mb-0">Proyectos Primarios</h5>
                                    <h1 className="text-white mb-0" data-toggle="counter-up">+4</h1>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 wow zoomIn" data-wow-delay="0.3s">
                            <div className="bg-terciary shadow d-flex align-items-center justify-content-center p-4" style={{height: "150px"}}>
                                <div className="d-flex align-items-center justify-content-center rounded mb-2" style={{height:"60px0", width:"60px"}}>
                                    <img className='icon_info' alt='alquileres logo' src={assets.alquileres}></img>
                                </div>
                                <div className="ps-4">
                                    <h5 className="text-white mb-0">Alquileres</h5>
                                    <h1 className="text-white mb-0" data-toggle="counter-up">+ 10</h1>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 wow zoomIn" data-wow-delay="0.6s">
                            <div className="bg-terciary shadow d-flex align-items-center justify-content-center p-4" style={{height: "150px"}}>
                                <div className="d-flex align-items-center justify-content-center rounded mb-2" style={{height:"60px0", width:"60px"}}>
                                    <img className='icon_info' alt='propiedades logo' src={assets.propiedades}></img>
                                </div>
                                <div className="ps-4">
                                    <h5 className="text-white mb-0">Propiedades</h5>
                                    <h1 className="text-white mb-0" data-toggle="counter-up">+ 15</h1>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 wow zoomIn" data-wow-delay="0.3s">
                            <div className="bg-terciary shadow d-flex align-items-center justify-content-center p-4" style={{height: "150px"}}>
                                <div className="d-flex align-items-center justify-content-center rounded mb-2" style={{height:"60px0", width:"60px"}}>
                                    <img className='icon_info' alt='cierres' src={assets.cierres}></img>
                                </div>
                                <div className="ps-4">
                                    <h5 className="text-white mb-0">Cierres</h5>
                                    <h1 className="text-white mb-0" data-toggle="counter-up">+ 2</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Fin Datos */}
        
        </>
    )
}