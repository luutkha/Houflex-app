import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from 'redux/store';

export interface LoadingState {
  loading: boolean;
 
}

const initialState: LoadingState = {
  loading: false,
  
};
const LoadingSlice = createSlice({
  name: 'loading',
  initialState: initialState,
  reducers: {
    setIsLoadingSreens(state) {
        state.loading = true
    },
    setIsLoadingSreensSuccess(state) {
        state.loading = false
    },
    
  },
});

// Actions
export const LoadingActions = LoadingSlice.actions;

// Selectors
export const selectLoading = (state: RootState) => state.loading.loading;

// Reducer
const LoadingReducer = LoadingSlice.reducer;
export default LoadingReducer;
