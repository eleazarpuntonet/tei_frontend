import React from 'react';
import './HeaderComponent.css';

import   {assets}   from '../../assets'
import { SearchComponent,SocialsComponent } from '../../components';

export const HeaderComponent = () => {
    return (
	<div className='header_container' style={{backgroundImage: `url(${assets.backgorund_image})`}}>
        <div className='container'>
            <img src={assets.backgorund_image} alt='logo tuenlaceinmobiliario' className='header_img'></img>
            <h1 className='hader_title text_title'>
                <span>
                    Encuentra tu hogar ideal
                </span>
            </h1>
            <SearchComponent></SearchComponent>
            <SocialsComponent></SocialsComponent>
        </div>
	</div>
    )
}