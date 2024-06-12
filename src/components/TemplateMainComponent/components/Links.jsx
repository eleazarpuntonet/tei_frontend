import React from "react";
import { assets } from "../../../assets";
export const Links = () => {
    return(
        <>
            {/* Inicio Precios */}
            <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container py-5">
                    <div className="row g-0">
                        <div className="col-lg-4 wow slideInUp" data-wow-delay="0.6s">
                            <div className="bg-light rounded">
                                <img className='img_' src={assets.imagen1} alt='imagen 1'></img>
                                <div className="border-top">
                                    <a className="btn btn-block btn-primary btn_link" href="">
                                        Más Información..
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 wow slideInUp" data-wow-delay="0.6s">
                            <div className="bg-light rounded">
                                <img className='img_' src={assets.imagen2} alt='imagen 1'></img>
                                <div className="border-top">
                                    <a className="btn btn-block btn-primary btn_link" href="">
                                        Más Información..
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 wow slideInUp" data-wow-delay="0.6s">
                            <div className="bg-light rounded">
                                <img className='img_' src={assets.imagen3} alt='imagen 1'></img>
                                <div className="border-top">
                                    <a className="btn btn-block btn-primary btn_link" href="">
                                        Más Información..
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Fin Precios */}        
        </>
    )
}