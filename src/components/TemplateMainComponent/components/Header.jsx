import React from "react";
import { assets } from '../../../assets';
import { SearchComponent } from '../../../components'
export const Header = () => {
    return(
        <>


            {/* Inicio Header */}
            <div className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={assets.backgorund_image} alt='logo tuenlaceinmobiliario' className='header_img' style={{width: '100%'}}></img>
                        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                            <div className="p-3" style={{maxWidth: "900px"}}>
                                <h1 className="display-4 text-white mb-md-4 animated zoomIn">ENCUENTRA TU HOGAR IDEAL</h1>
                                <SearchComponent></SearchComponent>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel"
                    data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#header-carousel"
                    data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button> */}
            </div>
            {/* Fin Header */}                 
        </>
    )
}