import axios from "axios";
import { apiPath,apiToken } from "../constants";

export const api = axios.create({
  baseURL: apiPath,
});

const MAX_RETRIES = 3; // Número máximo de reintentos permitidos
const THROTTLE_TIME = 1000; // Intervalo de tiempo en milisegundos

let lastRequestTime = 0;
// let requestInterceptorId = null;
const requests = {};

api.interceptors.request.use(
  (config) => {
    config.headers["Authorization"] = `Token ${apiToken}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


api.interceptors.response.use(
  (response) => {
    const requestId = JSON.stringify(response.config);

    delete requests[requestId];
    return response.data;
  },
  (error) => {
    const requestId = JSON.stringify(error.config);
    const originalRequest = error.config;

    // Verifica si originalRequest existe y si retryCount está definido antes de acceder a él
    if (originalRequest && originalRequest.retryCount === undefined) {
      originalRequest.retryCount = 0;
    } else {
      // console.log(originalRequest)
      return Promise.reject(error);
    }

    delete requests[requestId];

    if (!originalRequest.retryCount) {
      originalRequest.retryCount = 1;
    } else if (originalRequest.retryCount >= MAX_RETRIES) {
      return Promise.reject(error);
    } else {
      originalRequest.retryCount += 1;
    }

    // Espera un tiempo aleatorio antes de volver a intentar la solicitud
    const delay = Math.floor(Math.random() * 1000) + 500; // Delay entre 500 y 1500 milisegundos
    return new Promise((resolve) => setTimeout(() => resolve(api(originalRequest)), delay));
  }
);
