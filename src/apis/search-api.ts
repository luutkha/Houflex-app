import { API } from "constants/api";
import { PaginationParams, SearchResponse } from "types";
import IMovie from "types/object/IMovie";
import axiosClient from "./axios-client";

const SearchAPI = {
  searchMovie(params: PaginationParams): Promise<SearchResponse<IMovie>> {
    const url = `/search/movie?api_key=${API.API_KEY}&page=${params.page}&query=${params.query}&limit=${params.limit}`;
    return axiosClient.get(url,);
  },
};
export default SearchAPI;
