export interface SearchResponse<T> {
  results: T[];
  limit?: number;
  total_pages: number;
  total_results: number;
  page: number;
}
