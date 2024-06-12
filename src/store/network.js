import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  isLoading: false,
  error: null,
};

const httpSlice = createSlice({
  name: 'http',
  initialState,
  reducers: {
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
  },
});

export const { 
    startLoading, 
    stopLoading, 
    setError, 
    clearError 
} = httpSlice.actions;

export const fetchInmuebles = () => async (dispatch) => {
  dispatch(startLoading());
  try {
    const response = await axios.get('/inmuebles/');
    console.log(response.data);
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(stopLoading());
  }
};

export default httpSlice.reducer;
