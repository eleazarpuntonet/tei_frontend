import React from "react";
import { assets } from "../../../assets";
import { route_HOME } from '../../../constants'
import { Link, useNavigate } from 'react-router-dom';
import {  useDispatch } from 'react-redux'
import {  selectPropiedad  } from '../../../store/dataState';




export const Navbar = ({alwaysVisible}) =>{
    const visible = !!alwaysVisible
    const navigate = useNavigate();
	const dispatch = useDispatch()

    const handleClick = (propiedad) => () => {
		dispatch(selectPropiedad(null))
        navigate('/')
    }


    return(
        <>
            {/* Inicio Navbar */}
            <div className="container-fluid position-relative p-0">
                <nav id='nac_item' className={`navbar navbar-expand-lg navbar-dark px-5 py-3 py-lg-0 ${visible ? 'sticky-top shadow-sm visible__':''}`}>

                    <div onClick={handleClick()} className="navbar-brand p-0">
                        <div  className='logo_container'>
                                <img id="logo_BW" src={assets.logoTransparente} className={`logo ${visible? 'd-none': ''}`} alt="logo"></img>
                                <img id="logo_COLOR" src={assets.logo_color} className={`logo ${visible? '': 'd-none'}`} alt="logo"></img>
                        </div>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="fa fa-bars"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav ms-auto py-0">
                            {/* <a href="index.html" className="nav-item nav-link active">Comprar</a> */}
                            {/* <div className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Blog</a>
                                <div className="dropdown-menu m-0">
                                    <a href="blog.html" className="dropdown-item">Blog Grid</a>
                                    <a href="detail.html" className="dropdown-item">Blog Detail</a>
                                </div>
                            </div> */}


                            {/* <div className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Comprar</a>
                                <div className="dropdown-menu m-0">
                                    <a href="price.html" className="dropdown-item">Pricing Plan</a>
                                </div>
                            </div>
                            <div className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Alquilar</a>
                                <div className="dropdown-menu m-0">
                                    <a href="price.html" className="dropdown-item">Pricing Plan</a>
                                </div>
                            </div>
                            <div className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Temporal</a>
                                <div className="dropdown-menu m-0">
                                    <a href="price.html" className="dropdown-item">Pricing Plan</a>
                                </div>
                            </div>
                            <div className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Proyectos</a>
                                <div className="dropdown-menu m-0">
                                    <a href="price.html" className="dropdown-item">Pricing Plan</a>
                                </div>
                            </div> */}


                        </div>
                        {/* <button type="button" className="btn text-primary ms-3" data-bs-toggle="modal" data-bs-target="#searchModal"><i className="fa fa-search"></i></button> */}
                        <a className="btn py-2 px-4 ms-3 login_button" href={'https://inmobapp.tuenlaceinmobiliario.com/login'} target="_blank">Iniciar Sesión</a>
                    </div>
                </nav>
            </div>
            {/* Fin Navbar */}           
        </>
    )
}