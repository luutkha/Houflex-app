import { PayloadAction } from '@reduxjs/toolkit';
import SearchAPI from 'apis/search-api';
import { call, put, takeLatest } from 'redux-saga/effects';
import { PaginationParams, SearchResponse } from 'types';
import IMovie from 'types/object/IMovie';
import { SearchActions } from './SearchSlice';



function* fetchSearchResultListWhenSearch(action: PayloadAction<PaginationParams>) {
  try {
    const response: SearchResponse<IMovie> = yield call(SearchAPI.searchMovie,action.payload);
    yield put(SearchActions.fetchSearchListSuccess(response));
  } catch (error) {
    console.log('Failed to fetch Search list', error);
    yield put(SearchActions.fetchSearchListFailed());
  }
}



export default function* SearchSaga() {
  // yield takeLatest(SearchActions.fetchSearchList, fetchSearchList);
  yield takeLatest(SearchActions.fetchSearchResultListWhenSearch, fetchSearchResultListWhenSearch);

}
