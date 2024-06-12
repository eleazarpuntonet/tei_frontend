import { apiPath } from "../constants";
// import { setToken } from "./Auth"
const axios = require('axios');


export async function getAllCiudades() {
    try {
        const response = await axios.get(`${apiPath}ciudades/?page_size=100`);
        return response.data;
    } catch (error) {
        // console.warn('Esto es un error')
        // console.log(error.toJSON());
        return []
    }
}

export async function getSearchCiudades(searchString) {
    try {
        const response = await axios.get(`${apiPath}ciudades/?page_size=5`);
        return response.data;
    } catch (error) {
        // console.warn('Esto es un error')
        // console.log(error.toJSON());
        return []
    }
}

export async function createCiudades(body) {
    try {
        // const config = setToken()
        const response = await axios.post(`${apiPath}ciudades/`,body);
        return response.data;
    } catch (error) {
        return []
    }
}

export async function getOneCiudades(id) {
    try {
        const response = await axios.get(`${apiPath}ciudades/${id}`);
        return response.data;
    } catch (error) {
        return []
    }
}

export async function updateCiudades(id,body) {
    try {
        // const config = setToken()
        const response = await axios.patch(`${apiPath}ciudades/${id}`,body);
        return response.data;
    } catch (error) {
        return []
    }
}

export async function deleteCiudades(id) {
    try {
        // const config = setToken()
        const response = await axios.delete(`${apiPath}ciudades/${id}`);
        return response.data;
    } catch (error) {
        return []
    }
}