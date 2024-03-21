import { useQuery } from "@tanstack/react-query";

import { slowGet } from "@/api";

import { GenreModel } from "@/models";

export interface MovieGenresResponse {
  genres: GenreModel[];
}

const getNormalizedMovieGenres = () =>
  slowGet<MovieGenresResponse>("genre/movie/list").then((data) => ({
    items: data.genres.map((g) => g.id),
    itemsById: data.genres.reduce((result, g) => {
      result[g.id] = g;
      return result;
    }, {} as { [key: number]: GenreModel }),
  }));

export const useMovieGenres = () => {
  return useQuery({
    queryKey: ["movieGenres"],
    queryFn: getNormalizedMovieGenres,
    staleTime: Infinity,
  });
};

export default useMovieGenres;
