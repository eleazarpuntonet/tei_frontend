import axios from 'axios';

const MAX_RETRIES = 3;

function makeRequestWithRetries(url, retriesLeft = MAX_RETRIES) {
  return axios.get(url)
    .then(response => {
      // Si la solicitud se completó con éxito, resuelve con los datos
      return response.data;
    })
    .catch(error => {
      if (retriesLeft === 0) {
        // Si se agotan los intentos, rechaza la promesa con el error original
        throw error;
      }
      // Si quedan intentos, intenta la solicitud nuevamente después de una pausa
      return new Promise(resolve => setTimeout(resolve, 1000))
        .then(() => makeRequestWithRetries(url, retriesLeft - 1));
    });
}

export default makeRequestWithRetries;