import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import './Homesection.css'
import { 
	Navbar, 
	Header,
	Datos,
	InmueblesDestacados,
	Foot,
	Links
} from '../../components/TemplateMainComponent/components'
import {  callPropiedadesDestacadas  } from '../../store/dataState';


export const Homesection = () => {
	const propiedadesRequest = useSelector((state) => state.data);
	const dispatch = useDispatch()
	
    console.log(process.env.REACT_APP_API_URL)

	const loadData = useCallback(() => {
		dispatch(callPropiedadesDestacadas())
	},[dispatch])
	
	useEffect(() => {
		loadData()
	}, [loadData]);

	return (
		<>
			<Navbar></Navbar>
			<Header></Header>
			<Datos></Datos>
				<InmueblesDestacados 
					propiedades = {propiedadesRequest} 
					titulo      = "Propiedades Disponibles">
				</InmueblesDestacados>
				<InmueblesDestacados 
					propiedades = {propiedadesRequest} 
					titulo      = "Proyectos Destacados">
				</InmueblesDestacados>
				{/* <InmueblesDestacados 
					propiedades = {propiedadesRequest} 
					titulo      = "Alquileres Destacados">
				</InmueblesDestacados> */}
			<Links></Links>
			<Foot></Foot>
		</>
	)
}
