import { apiPath } from "../constants";
// import { setToken } from "./Auth"
const axios = require('axios');


export async function getAllFranquicias() {
    try {
        const response = await axios.get(`${apiPath}franquicias/?page_size=100`);
        return response.data;
    } catch (error) {
        console.warn('Esto es un error')
        console.log(error.toJSON());
        return []
    }
}

export async function getSearchFranquicias(searchString) {
    try {
        const response = await axios.get(`${apiPath}franquicias/?page_size=5`);
        return response.data;
    } catch (error) {
        console.warn('Esto es un error')
        console.log(error.toJSON());
        return []
    }
}

export async function createFranquicias(body) {
    try {
        // const config = setToken()
        const response = await axios.post(`${apiPath}franquicias/`,body);
        return response.data;
    } catch (error) {
        return []
    }
}

export async function getOneFranquicias(id) {
    try {
        const response = await axios.get(`${apiPath}franquicias/${id}`);
        return response.data;
    } catch (error) {
        return []
    }
}

export async function updateFranquicias(id,body) {
    try {
        // const config = setToken()
        const response = await axios.patch(`${apiPath}franquicias/${id}`,body);
        return response.data;
    } catch (error) {
        return []
    }
}

export async function deleteFranquicias(id) {
    try {
        // const config = setToken()
        const response = await axios.delete(`${apiPath}franquicias/${id}`);
        return response.data;
    } catch (error) {
        return []
    }
}