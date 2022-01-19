import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from 'redux/store';
import {PaginationParams, SearchResponse} from 'types';
import IMovie from 'types/object/IMovie';

export interface SearchState {
  loading: boolean;
  data: SearchResponse<IMovie>;
}

const initialState: SearchState = {
  loading: false,
  data: {page: 1, total_pages: 1, total_results: 1, results: []},
};
const SearchSlice = createSlice({
  name: 'Search',
  initialState: initialState,
  reducers: {
    fetchSearchList(state) {},
    fetchSearchResultListWhenSearch(
      state,
      action: PayloadAction<PaginationParams>,
    ) {
      state.loading = true;
    },
    fetchSearchListSuccess(
      state,
      action: PayloadAction<SearchResponse<IMovie>>,
    ) {
      let {results} = action.payload;
      let tempResultsList = [];

      tempResultsList = results.filter(item => item.backdrop_path);

      state.data = action.payload;
      state.data.results = tempResultsList;
      state.loading = false;
    },
    fetchSearchListFailed(state) {
      state.loading = false;
    },
  },
});

// Actions
export const SearchActions = SearchSlice.actions;

// Selectors
export const selectSearchList = (state: RootState) => state.search.data;
export const selectSearchLoading = (state: RootState) => state.search.loading;

// Reducer
const SearchReducer = SearchSlice.reducer;
export default SearchReducer;
