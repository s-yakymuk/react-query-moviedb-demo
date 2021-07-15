import { useQuery } from "react-query";

import useAccountId from "hooks/useAccountId";

import { slowGet } from "api";

import { MovieModel } from "models";

import { FAVORITE_MOVIES_QUERY_KEY } from "consts";

export interface FavoriteMoviesResponse {
  results: MovieModel[];
}

export interface AccountDetailsResponse {
  id: number;
  name: string;
}

const getFavoriteMovieIds = (account_id?: number) =>
  slowGet<FavoriteMoviesResponse>(`account/${account_id}/favorite/movies`).then(
    (data) => data.results.map((m) => m.id)
  );

export const useFavoriteMovies = () => {
  const account_id = useAccountId();

  return useQuery(
    FAVORITE_MOVIES_QUERY_KEY,
    () => getFavoriteMovieIds(account_id),
    {
      enabled: !!account_id,
      staleTime: 10 * 60 * 1000,
    }
  );
};

export default useFavoriteMovies;
