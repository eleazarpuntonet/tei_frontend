import { createSlice } from '@reduxjs/toolkit'
import { getAllCiudades, getSearchCiudades } from '../services/CiudadesService'

const initialState = {
  ciudades     : [],
  actualPage: 1,
  count: 0,
  next: null,
  previus: null,
  results: [],
  ciudadSelection: null,
  searchScheme: '',
  searchResults: [],
  isLoadingRequest: false
}

const SET_SELECTION = (state, { payload }) => {
  state.ciudadSelection = payload
}
const DEL_SELECTION = (state) => {
  state.ciudadSelection = null
}
const SET_SEARCHTEXT = (state, { payload }) => {
  state.searchScheme = payload
}
const SET_CIUDAD = (state, { payload }) => {
  state.ciudades = payload.results
  state.count       = payload.count
  state.next        = payload.next
  state.previus     = payload.previus
  state.results     = payload.results      
}

const SET_CIUDADESSEARCHRESPONSE = (state, { payload }) => {
  state.searchResults     = payload     
}

const UPDATE_LOADING_REQUEST_STATUS = (state, { payload }) => {
  state.isLoadingRequest     = payload     
}


export const dataSlice = createSlice({
  name: 'ciudades',
  initialState,
  reducers: {
    setCiudades              : SET_CIUDAD,
    setSelection                : SET_SELECTION,
    delSelection                : DEL_SELECTION,
    setSearchText               : SET_SEARCHTEXT,
    setPropiedadesSearchResponse: SET_CIUDADESSEARCHRESPONSE,
    updateLoadingRequestStatus: UPDATE_LOADING_REQUEST_STATUS
  }
})

export const callCiudades= () => 
  async (dispatch) => {
    const res = await getAllCiudades()
    dispatch(dataSlice.actions.setCiudades(res))
};


export const callSearchCiudades =(searchString) => 
  async (dispatch) => {
    dispatch(dataSlice.actions.updateLoadingRequestStatus(true))
    const res = await getSearchCiudades(searchString)
    dispatch(dataSlice.actions.updateLoadingRequestStatus(false))
    dispatch(dataSlice.actions.setPropiedadesSearchResponse(res))
};


export default dataSlice.reducer
