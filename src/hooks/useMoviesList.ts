import { QueryKey, useQuery, keepPreviousData } from "@tanstack/react-query";

import { slowGet } from "@/api";
import { MovieModel } from "@/models";

import { MoviesListParams } from "./useMoviesListParams";

export interface MoviesListResponse {
  page: number;
  total_pages: number;
  total_results: number;
  results: MovieModel[];
}

export const useMoviesList = (params: MoviesListParams) => {
  const isSearchQuery = !!params.query;
  const queryKey: QueryKey = ["movies", params];

  return useQuery({
    queryKey,
    queryFn: () =>
      slowGet<MoviesListResponse>(
        `${isSearchQuery ? "search" : "discover"}/movie`,
        { params }
      ),
    placeholderData: keepPreviousData,
  });
};

export default useMoviesList;
