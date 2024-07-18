import { useMutation, useQueryClient } from "@tanstack/react-query";

import { axiosJsonServerInstance } from "@/api";

import { DraftReviewModel } from "@/models";

export const useAddMovieReview = (onSuccess?: () => void) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (params: DraftReviewModel) =>
      axiosJsonServerInstance.post(`reviews`, {
        createdDate: new Date().toISOString(),
        ...params,
      }),
    onSuccess,
    onSettled: (_res, _err, params) => {
      queryClient.invalidateQueries({
        queryKey: ["movieReviews", params.movieId],
      });
    },
  });
};

export default useAddMovieReview;
