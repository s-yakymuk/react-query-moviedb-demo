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

export const useFavoriteMovies = () => {
  const account_id = useAccountId();

  return useQuery(
    FAVORITE_MOVIES_QUERY_KEY,
    () =>
      slowGet<FavoriteMoviesResponse>(
        `account/${account_id}/favorite/movies`
      ).then((data) => data.results.map((m) => m.id)),
    {
      enabled: !!account_id,
    }
  );
};

export default useFavoriteMovies;
