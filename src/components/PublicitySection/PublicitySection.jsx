import React from 'react';
import './PublicitySection.css';
import { assets } from '../../assets';

export const PublicitySection = () => {
    return(
        <>
            <section className='publicity_section'>
                <div className='container'>
                    <div className='img_container active'>
                        <img className='img_' src={assets.imagen1} alt='imagen 1'></img>
                        <div className='link_section'>
                            <p>
                                Mas Informacion
                            </p>
                        </div>
                    </div>
                    <div className='img_container'>
                        <img className='img_' src={assets.imagen2} alt='imagen 2'></img>
                        <div className='link_section'>
                            <p>
                                Mas Informacion
                            </p>
                        </div>
                    </div>
                    <div className='img_container'>
                        <img className='img_' src={assets.imagen3} alt='imagen 3'></img>
                        <div className='link_section'>
                            <p>
                                Mas Informacion
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}