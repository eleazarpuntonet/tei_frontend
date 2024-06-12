import React from 'react';
import './SocialsComponent.css';
import { assets }   from '../../assets'

export const SocialsComponent = () => {
    return (
        <>
            <div className="socialsContainer">
                <div className='icons'>
                    <img src={assets.facebook} alt="facebook" />
                    <img src={assets.twitter} alt="twitter" />
                    <img src={assets.instagram} alt="instagram" />
                </div>
                <div className='chat'>
                    <img src={assets.chat} alt="chat" />
                </div>
            </div>
        </>
    )
}