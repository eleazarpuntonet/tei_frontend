import React from 'react';
import './InfoComponent.css';

export const InfoComponent = (props) =>{
    const { children, value, description } = props;

    return (
        <>
            <div className='info_container'>
                <div className='icon_div'>
                    {children}
                </div>
                <div className='data_div'>
                    <div className='value'>
                        <span>{value}</span>
                    </div>
                    <div className='description'>
                        <span>{description}</span>
                    </div>
                </div>
            </div>
        </>
    )
}