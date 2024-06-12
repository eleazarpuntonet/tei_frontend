import { apiPath } from "../constants";
// import { setToken } from "./Auth"
const axios = require('axios');


export async function getAllTiposInmuebles() {
    try {
        const response = await axios.get(`${apiPath}tiposinmuebles/`);
        return response.data;
    } catch (error) {
        console.warn('Esto es un error')
        console.log(error.toJSON());
        return []
    }
}

export async function getSearchTiposInmuebles(searchString) {
    try {
        const response = await axios.get(`${apiPath}tiposinmuebles/?page_size=5`);
        return response.data;
    } catch (error) {
        console.warn('Esto es un error')
        console.log(error.toJSON());
        return []
    }
}

export async function createTiposInmuebles(body) {
    try {
        // const config = setToken()
        const response = await axios.post(`${apiPath}tiposinmuebles/`,body);
        return response.data;
    } catch (error) {
        return []
    }
}

export async function getOneTiposInmuebles(id) {
    try {
        const response = await axios.get(`${apiPath}tiposinmuebles/${id}`);
        return response.data;
    } catch (error) {
        return []
    }
}

export async function updateTiposInmuebles(id,body) {
    try {
        // const config = setToken()
        const response = await axios.patch(`${apiPath}tiposinmuebles/${id}`,body);
        return response.data;
    } catch (error) {
        return []
    }
}

export async function deleteTiposInmuebles(id) {
    try {
        // const config = setToken()
        const response = await axios.delete(`${apiPath}tiposinmuebles/${id}`);
        return response.data;
    } catch (error) {
        return []
    }
}