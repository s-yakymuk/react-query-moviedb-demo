import { useQuery } from "@tanstack/react-query";

import { jsonServerSlowGet } from "@/api";

import { ReviewModel } from "@/models";

export const useMovieReviews = (id?: number) =>
  useQuery({
    queryKey: ["movieReviews", id],
    queryFn: () => jsonServerSlowGet<ReviewModel[]>(`reviews?movieId=${id}`),
    enabled: !!id,
  });

export default useMovieReviews;
