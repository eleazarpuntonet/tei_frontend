// import images from './images';
// const apiPath = 'https://teiback.duckdns.org/api/'
// const apiPath = process.env.REACT_APP_API_PATH;
const apiPath = process.env.REACT_APP_API_URL;
const apiToken = process.env.REACT_APP_API_TOKEN;
// const apiPath = 'https://innovatetest.duckdns.org/api/';
const route_HOME = '/';
const route_BUSQUEDA = '/busqueda';
const route_INMUEBLE = '/inmueble';
const route_PRINTPDF = '/vista-individual-pdf';
export { 
    apiPath, 
    route_HOME,
    route_BUSQUEDA,
    route_INMUEBLE,
    route_PRINTPDF,
    apiToken
};