import React from "react";
import { ReactSVG } from "react-svg";


export const Svg = ({src}) =>{
    return(
        <>
            <ReactSVG rapper="span" className="svg_icon" src={src} />
        </>
    )
}