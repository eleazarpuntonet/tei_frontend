import { createSlice } from '@reduxjs/toolkit'
import { api } from '../services/axios'

const initialState = {
  tipos_negociacion: [],
  actualPage       : 1,
  count            : 0,
  next             : null,
  previus          : null,
  results          : [],
  isLoadingRequest : false
}


const SET_TIPOSNEGOCIACION = (state, { payload }) => {
  state.tipos_negociacion = payload.results
  state.count       = payload.count
  state.next        = payload.next
  state.previus     = payload.previus
  state.results     = payload.results      
}

const UPDATE_LOADING_REQUEST_STATUS = (state, { payload }) => {
  state.isLoadingRequest     = payload     
}


export const dataSlice = createSlice({
  name: 'tipos_negociacion',
  initialState,
  reducers: {
    setTiposNegociacion             : SET_TIPOSNEGOCIACION,
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

export const callTiposNegociacion =() => 
  async (dispatch) => {
    dispatch(startLoading());
    try {
      const response = await api.get(`tiposnegociacion/`);
      dispatch(dataSlice.actions.setTiposNegociacion(response))
      dispatch(clearError());
    } catch (error) {
      dispatch(setError(error.message));
    } finally {
      dispatch(stopLoading());
    }    
};
export default dataSlice.reducer
export const { startLoading, stopLoading, setError, clearError } = dataSlice.actions;
