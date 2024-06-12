import { createSlice } from '@reduxjs/toolkit'
import { getAllTiposInmuebles, getSearchTiposInmuebles } from '../services/TiposInmueblesService'

const initialState = {
  tipos_inmuebles     : [],
  actualPage: 1,
  count: 0,
  next: null,
  previus: null,
  results: [],
  tipo_inmuebleSelection: null,
  searchScheme: '',
  searchResults: [],
  isLoadingRequest: false
}

const SET_SELECTION = (state, { payload }) => {
  state.tipo_inmuebleSelection = payload
}
const DEL_SELECTION = (state) => {
  state.tipo_inmuebleSelection = null
}
const SET_SEARCHTEXT = (state, { payload }) => {
  state.searchScheme = payload
}
const SET_TIPOSINMUEBLES = (state, { payload }) => {
  state.tipos_inmuebles = payload.results
  state.count       = payload.count
  state.next        = payload.next
  state.previus     = payload.previus
  state.results     = payload.results      
}

const SET_TIPOINMUEBLESSEARCHRESPONSE = (state, { payload }) => {
  state.searchResults     = payload     
}

const UPDATE_LOADING_REQUEST_STATUS = (state, { payload }) => {
  state.isLoadingRequest     = payload     
}


export const dataSlice = createSlice({
  name: 'tipos_inmuebles',
  initialState,
  reducers: {
    setTiposInmuebles              : SET_TIPOSINMUEBLES,
    setSelection                : SET_SELECTION,
    delSelection                : DEL_SELECTION,
    setSearchText               : SET_SEARCHTEXT,
    setPropiedadesSearchResponse: SET_TIPOINMUEBLESSEARCHRESPONSE,
    updateLoadingRequestStatus: UPDATE_LOADING_REQUEST_STATUS
  }
})

export const callTiposInmuebles= () => 
  async (dispatch) => {
    const res = await getAllTiposInmuebles()
    dispatch(dataSlice.actions.setTiposInmuebles(res))
};

export const selectTipoInmueble =(propiedad) => 
  (dispatch) => {
    if(propiedad !== undefined)
      dispatch(dataSlice.actions.setSelection(propiedad))
    else
      dispatch(dataSlice.actions.delSelection(propiedad))
};

export const searchTipoInmueble =(propiedadSearchFilters) => 
  (dispatch) => {
    dispatch(dataSlice.actions.setSearchText(propiedadSearchFilters))
};


export const callSearchTiposInmuebles =(searchString) => 
  async (dispatch) => {
    dispatch(dataSlice.actions.updateLoadingRequestStatus(true))
    const res = await getSearchTiposInmuebles(searchString)
    dispatch(dataSlice.actions.updateLoadingRequestStatus(false))
    dispatch(dataSlice.actions.setPropiedadesSearchResponse(res))
};


export default dataSlice.reducer
