import React, { useState, useEffect, useCallback } from 'react';
import './ResultsSection.css';
import { 
	Navbar, 
	InmueblesDestacados,
	Foot,
} from '../../components/TemplateMainComponent/components'
import { SearchForm } from "../SearchForm/SearchForm";
import { useSelector, useDispatch } from 'react-redux'
import {  callPropiedadesDestacadas  } from '../../store/dataState';



export const ResultsSection = () => {

	const propiedadesRequest = useSelector((state) => state.data);
	const dispatch = useDispatch()
	
	const loadData = useCallback(() => {
		dispatch(callPropiedadesDestacadas())
	},[dispatch])

	useEffect(() => {
		loadData()
	}, [loadData]);
    
    
    return(
        <>
            <Navbar alwaysVisible={true}></Navbar>
            <SearchForm></SearchForm>
            <InmueblesDestacados 
				propiedades        = {propiedadesRequest} 
                titulo = "Propiedades Destacadas">
            </InmueblesDestacados>
            <Foot></Foot>        
        </>
    )
}