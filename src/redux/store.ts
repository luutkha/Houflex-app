import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import SearchReducer from 'features/Home/SearchSlice';
import rootSaga from './rootSage';
import LoadingReducer from 'hooks/loading/LoadingSlice';

const rootReducer = combineReducers({
  search: SearchReducer,
  loading: LoadingReducer

});

const sagaMiddleWare = createSagaMiddleware();
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleWare),
});

sagaMiddleWare.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
