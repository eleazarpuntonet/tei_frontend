import { createSlice } from '@reduxjs/toolkit'
import { getAllPropiedades } from '../services/PropiedadService'
import { api } from '../services/axios'
const initialState = {
  propiedades     : [],
  actualPage: 1,
  count: 0,
  next: null,
  previus: null,
  results: [],
  propiedadSelection: null,
  propiedadSearchFilters: '',
  searchResults: [],
  isLoadingRequest: false,
  isLoading: false,
  error: null,
}



const SET_SELECTION = (state, { payload }) => {
  state.propiedadSelection = payload
}
const DEL_SELECTION = (state) => {
  state.propiedadSelection = null
}
const SET_SEARCHTEXT = (state, { payload }) => {
  state.propiedadSearchFilters = {
    ...state.propiedadSearchFilters, // Copia las propiedades existentes
    ...payload // Agrega o modifica las nuevas propiedades
  };
}
const DEL_SEARCHTEXT = (state, { payload }) => {
  state.propiedadSearchFilters = {};
}
const SET_PROPIEDADES = (state, { payload }) => {
  state.propiedades = payload.results
  state.count       = payload.count
  state.next        = payload.next
  state.previus     = payload.previus
  state.results     = payload.results      
}

const SET_PROPIEDADESSEARCHRESPONSE = (state, { payload }) => {
  state.searchResults     = payload     
}

const UPDATE_LOADING_REQUEST_STATUS = (state, { payload }) => {
  state.isLoadingRequest     = payload     
}


export const dataSlice = createSlice({
  name: 'dataStore',
  initialState,
  reducers: {
    setPropiedades              : SET_PROPIEDADES,
    setSelection                : SET_SELECTION,
    delSelection                : DEL_SELECTION,
    setSearchText               : SET_SEARCHTEXT,
    delSearchText               : DEL_SEARCHTEXT,
    setPropiedadesSearchResponse: SET_PROPIEDADESSEARCHRESPONSE,
    updateLoadingRequestStatus: UPDATE_LOADING_REQUEST_STATUS,

    startLoading(state) {
      state.isLoading = true;
    },
    stopLoading(state) {
      state.isLoading = false;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    clearError(state) {
      state.error = null;
    },
    
  }
})

export const callPropiedades =(lang = '') => 
  async (dispatch) => {
    const res = await getAllPropiedades()
    dispatch(dataSlice.actions.setPropiedades(res))
};

export const callPropiedadesDestacadas =() => 
  async (dispatch) => {
    const response = await api.get(`propiedades/`);
    dispatch(dataSlice.actions.setPropiedades(response))
};


export const selectPropiedad =(propiedad) => 
  (dispatch) => {
    if(propiedad !== undefined)
      dispatch(dataSlice.actions.setSelection(propiedad))
    else
      dispatch(dataSlice.actions.delSelection(propiedad))
};

export const searchPropiedad =(params) => 
  (dispatch) => {
    dispatch(dataSlice.actions.setSearchText(params))
};
export const cleanSearchPropiedad =(params) => 
  (dispatch) => {
    dispatch(dataSlice.actions.delSearchText())
};


export const callSearchPropiedades = (searchString) => async (dispatch, getState) => {
  dispatch(startLoading());
  try {
    const state = getState();
    const searchFilters = state.data.propiedadSearchFilters;
    const urlParams = construirUrlBase({
      search              : searchFilters.text, 
      tipo_inmueble       : searchFilters.tipo_inmueble,
      tipo_negociacion    : searchFilters.tipo_negociacion,
      ciudad              : searchFilters.ciudad,
      estado              : searchFilters.estado,
      franquicia          : searchFilters.franquicia,
      min_precio          : searchFilters.inicio_precio,
      max_precio          : searchFilters.fin_precio,
      banios              : searchFilters.banios,
      habitaciones        : searchFilters.habitaciones,
      ptos_estacionamiento: searchFilters.ptos_estacionamiento,
      min_habitaciones    : searchFilters.minHabitaciones,
      max_habitaciones    : searchFilters.maxHabitaciones,
      max_mtscuadrados    : searchFilters.maxMtsCuadrados,
      min_mtscuadrados    : searchFilters.minMtsCuadrados,
    },'propiedades/')
    const response = await api.get(urlParams);
    dispatch(dataSlice.actions.setPropiedadesSearchResponse(response))
    dispatch(clearError());
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(stopLoading());
  }
};

function construirUrlBase(objeto, endpoint) {
  const queryParams = Object.entries(objeto)
    .filter(([clave, valor]) =>{
      const isValid = 
        valor !== null && 
        valor !== '' && 
        valor !== undefined && 
        valor !== 0 && 
        valor !== '0' && 
        valor !== 'Todos'
      return isValid
    }) // Filtrar propiedades vacías o nulas
    .map(([clave, valor]) => `${encodeURIComponent(clave)}=${encodeURIComponent(valor)}`)
    .join('&');
  return `${endpoint}?${queryParams}`;
}


export const { startLoading, stopLoading, setError, clearError } = dataSlice.actions;
export default dataSlice.reducer