// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Footer.css';
import { assets } from '../../assets';

export const Footer = () => {
    return(
        <>
            <section className='section_footer'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-3 logo_footer_container'>
                            <img src={assets.logo_color} alt='Logo Tuinmueble.com'></img>
                        </div>
                        <div className='col-3 info_box'>
                            {/* <div className='title_'>
                                <span>
                                    SOBRE NOSOTROS
                                </span>
                            </div>
                            <ul className='links_list'>
                                <li className='link_fron_list'>
                                    <a href='#'>
                                        Quienes Somos?
                                    </a>
                                </li>
                            </ul> */}
                        </div>
                        <div className='col-3 info_box'>
                            {/* <div className='title_'>
                                <span>
                                    AYUDA
                                </span>
                            </div>
                            <ul className='links_list'>
                                <li className='link_fron_list'>
                                    <a href='#'>
                                        Preguntas Frecuentes
                                    </a>
                                </li>
                            </ul> */}
                        </div>
                        <div className='col-3 info_box'>
                            {/* <div className='title_'>
                                <span>
                                    CONTACTANOS:
                                </span>
                            </div>               */}
                            <div className='icon_box_'>
                                {/* <div className='icons'>
                                    <img src={assets.facebook} alt="facebook" />
                                    <img src={assets.twitter} alt="twitter" />
                                    <img src={assets.instagram} alt="instagram" />
                                </div>                                 */}
                            </div>              
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}