import { apiPath } from "../constants";
// import { setToken } from "./Auth"
const axios = require('axios');


export async function getAllEstados() {
    try {
        const response = await axios.get(`${apiPath}estados/`);
        return response.data;
    } catch (error) {
        console.warn('Esto es un error')
        console.log(error.toJSON());
        return []
    }
}

export async function getSearchEstados(searchString) {
    try {
        const response = await axios.get(`${apiPath}estados/?page_size=5`);
        return response.data;
    } catch (error) {
        console.warn('Esto es un error')
        console.log(error.toJSON());
        return []
    }
}

export async function createEstados(body) {
    try {
        // const config = setToken()
        const response = await axios.post(`${apiPath}estados/`,body);
        return response.data;
    } catch (error) {
        return []
    }
}

export async function getOneEstados(id) {
    try {
        const response = await axios.get(`${apiPath}estados/${id}`);
        return response.data;
    } catch (error) {
        return []
    }
}

export async function updateEstados(id,body) {
    try {
        // const config = setToken()
        const response = await axios.patch(`${apiPath}estados/${id}`,body);
        return response.data;
    } catch (error) {
        return []
    }
}

export async function deleteEstados(id) {
    try {
        // const config = setToken()
        const response = await axios.delete(`${apiPath}estados/${id}`);
        return response.data;
    } catch (error) {
        return []
    }
}