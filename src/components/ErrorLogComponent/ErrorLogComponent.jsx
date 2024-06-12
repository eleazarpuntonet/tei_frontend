import React from "react";
import './ErrorLogComponent.css'
import { AlertIcon } from "../../assets";

export const ErrorLogComponent = ({msg}) =>{
    return(
        <>
            <div className="errowLog">
                <AlertIcon fill={'#ff4500'}></AlertIcon>
                {/* <h3>Ups!<br></br>las cosas no han marchado como se esperaba</h3> */}
                {
                    (!!msg) ? (
                        <h4>
                            {msg}
                        </h4>
                    ) : (
                        <h3>
                            No se pudo alcanzar este recurso
                        </h3>
                    )
                }
            </div>
        </>
    )
}