import { apiPath } from "../constants";
// import { setToken } from "./Auth"
// const api = require('api');
import { api } from './axios'

export async function getAllPropiedades() {
    try {
        const response = await api.get(`${apiPath}propiedades/`);
        return response.data;
    } catch (error) {
        console.warn('Esto es un error')
        console.log(error);
        return []
    }
}

export async function getAllPropiedadesRecientes() {
    try {
        const response = await api.get(`${apiPath}propiedades/`);
        return response.data;
    } catch (error) {
        console.warn('Esto es un error')
        console.log(error);
        return []
    }
}

export async function getSearchPropiedades(searchString) {
    try {
        let url = `${apiPath}propiedades/${searchString}`
        const response = await api.get(url);
        return response.data;
    } catch (error) {
        console.warn('Esto es un error')
        console.log(error);
        return []
    }
}

export async function createPropiedades(body) {
    try {
        // const config = setToken()
        const response = await api.post(`${apiPath}propiedades/`,body);
        return response.data;
    } catch (error) {
        return []
    }
}

export async function getOnePropiedades(id) {
    try {
        const response = await api.get(`${apiPath}propiedades/${id}`);
        return response.data;
    } catch (error) {
        return []
    }
}

export async function updatePropiedades(id,body) {
    try {
        // const config = setToken()
        const response = await api.patch(`${apiPath}propiedades/${id}`,body);
        return response.data;
    } catch (error) {
        return []
    }
}

export async function deletePropiedades(id) {
    try {
        // const config = setToken()
        const response = await api.delete(`${apiPath}propiedades/${id}`);
        return response.data;
    } catch (error) {
        return []
    }
}