import React from 'react';
import './PaginacionComponent.css'

export const PaginacionComponent = () => {
    return(
        <>
            <div className='paginacion f-row'>
                <div className='prev_button'>
                    <button className='btn inmo_button secundario'>
                        ANTERIOR
                    </button>
                </div>
                <div className='numeracion'>
                    <ul className='numeros f-row'>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                        <li>6</li>
                        <li>...</li>
                    </ul>
                </div>
                <div className='next_button'>
                    <button className='btn inmo_button secundario'>
                        SIGUIENTE
                    </button>
                </div>
                <div className='last_page_button'>
                    <button className='btn inmo_button terciario'>
                        ULTIMA PAG.
                    </button>
                </div>
            </div>
        </>
    )
}