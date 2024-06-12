import { createSlice } from '@reduxjs/toolkit'
import { getAllFranquicias, getSearchFranquicias } from '../services/FranquiciasService'

const initialState = {
  franquicias     : [],
  actualPage: 1,
  count: 0,
  next: null,
  previus: null,
  results: [],
  franquiciaSelection: null,
  searchScheme: '',
  searchResults: [],
  isLoadingRequest: false
}

const SET_SELECTION = (state, { payload }) => {
  state.franquiciaSelection = payload
}
const DEL_SELECTION = (state) => {
  state.franquiciaSelection = null
}
const SET_SEARCHTEXT = (state, { payload }) => {
  state.searchScheme = payload
}
const SET_FRANCQUIA = (state, { payload }) => {
  state.franquicias = payload.results
  state.count       = payload.count
  state.next        = payload.next
  state.previus     = payload.previus
  state.results     = payload.results      
}

const SET_FRANQUICIASSEARCHRESPONSE = (state, { payload }) => {
  state.searchResults     = payload     
}

const UPDATE_LOADING_REQUEST_STATUS = (state, { payload }) => {
  state.isLoadingRequest     = payload     
}


export const dataSlice = createSlice({
  name: 'franquicias',
  initialState,
  reducers: {
    setFranquicias              : SET_FRANCQUIA,
    setSelection                : SET_SELECTION,
    delSelection                : DEL_SELECTION,
    setSearchText               : SET_SEARCHTEXT,
    setPropiedadesSearchResponse: SET_FRANQUICIASSEARCHRESPONSE,
    updateLoadingRequestStatus: UPDATE_LOADING_REQUEST_STATUS
  }
})

export const callFranquicias= () => 
  async (dispatch) => {
    const res = await getAllFranquicias()
    dispatch(dataSlice.actions.setFranquicias(res))
};

export const selectFranquicia =(propiedad) => 
  (dispatch) => {
    if(propiedad !== undefined)
      dispatch(dataSlice.actions.setSelection(propiedad))
    else
      dispatch(dataSlice.actions.delSelection(propiedad))
};

export const searchFranquicia =(propiedadSearchFilters) => 
  (dispatch) => {
    dispatch(dataSlice.actions.setSearchText(propiedadSearchFilters))
};


export const callSearchFranquicias =(searchString) => 
  async (dispatch) => {
    dispatch(dataSlice.actions.updateLoadingRequestStatus(true))
    const res = await getSearchFranquicias(searchString)
    dispatch(dataSlice.actions.updateLoadingRequestStatus(false))
    dispatch(dataSlice.actions.setPropiedadesSearchResponse(res))
};


export default dataSlice.reducer
