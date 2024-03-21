import { useQuery } from "@tanstack/react-query";

import { slowGet } from "@/api";
import { MovieDetailsModel } from "@/models";

export const useMovieDetails = (id?: number) =>
  useQuery({
    queryKey: ["movieDetails", id],
    queryFn: () => slowGet<MovieDetailsModel>(`movie/${id}`),
    enabled: !!id,
  });

export default useMovieDetails;
