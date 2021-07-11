import { QueryKey, useQuery } from "react-query";

import { slowGet } from "api";
import { MovieModel } from "models";

export interface MoviesListParams {
  page?: number;
  query?: string;
}

export interface MoviesListResponse {
  page: number;
  total_pages: number;
  total_results: number;
  results: MovieModel[];
}

export const useMoviesList = (params: MoviesListParams) => {
  const isSearchQuery = !!params.query;
  const queryKey: QueryKey = ["movies", params];

  return useQuery(
    queryKey,
    () =>
      slowGet<MoviesListResponse>(
        `${isSearchQuery ? "search" : "discover"}/movie`,
        { params }
      ),
    {
      keepPreviousData: true,
    }
  );
};

export default useMoviesList;
