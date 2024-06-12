import React from 'react';

export const Loader = () =>{
    return(
        <>
            {/* Inicio Loader */}
            <div 
                id="spinner" 
                className="
                show 
                w-100 
                top-50 
                start-50 
                d-flex 
                align-items-center 
                justify-content-center
                ">
                <div className="spinner"></div>
            </div>
            {/* Fin Loader */}        
        </>
    )
}