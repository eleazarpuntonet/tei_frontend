import { createSlice } from '@reduxjs/toolkit'
import { getAllEstados } from '../services/EstadosService'

const initialState = {
  estados     : [],
  actualPage: 1,
  count: 0,
  next: null,
  previus: null,
  results: [],
  estado_selection: null,
  searchScheme: '',
  searchResults: [],
  isLoadingRequest: false
}

const SET_SELECTION = (state, { payload }) => {
  state.estado_selection = payload
}
const DEL_SELECTION = (state) => {
  state.estado_selection = null
}
const SET_SEARCHTEXT = (state, { payload }) => {
  state.searchScheme = payload
}
const SET_ESTADOS = (state, { payload }) => {
  state.estados = payload
}

const SET_ESTADOSEARCHRESPONSE = (state, { payload }) => {
  state.searchResults     = payload     
}

const UPDATE_LOADING_REQUEST_STATUS = (state, { payload }) => {
  state.isLoadingRequest     = payload     
}


export const dataSlice = createSlice({
  name: 'estados',
  initialState,
  reducers: {
    setEstados              : SET_ESTADOS,
    setSelection                : SET_SELECTION,
    delSelection                : DEL_SELECTION,
    setSearchText               : SET_SEARCHTEXT,
    setPropiedadesSearchResponse: SET_ESTADOSEARCHRESPONSE,
    updateLoadingRequestStatus: UPDATE_LOADING_REQUEST_STATUS
  }
})

export const callEstados= () => 
  async (dispatch) => {
    const res = await getAllEstados()
    dispatch(dataSlice.actions.setEstados(res))
};


export default dataSlice.reducer
