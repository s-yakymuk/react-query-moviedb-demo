import { useQuery } from "react-query";

import { slowGet } from "api";
import { MovieDetailsModel } from "models";

export const useMovieDetails = (id?: number) =>
  useQuery(
    ["movieDetails", id],
    () => slowGet<MovieDetailsModel>(`movie/${id}`),
    {
      enabled: !!id,
    }
  );

export default useMovieDetails;
