import { useQuery, useQueryClient } from "@tanstack/react-query";

import { jsonServerSlowGet } from "@/api";

import { CommentModel } from "@/models";

const getReviewComments = (reviewId?: string) =>
  jsonServerSlowGet<CommentModel[]>(`comments?reviewId=${reviewId}`);

export const useReviewComments = (reviewId?: string) =>
  useQuery({
    queryKey: ["reviewComments", reviewId],
    queryFn: () => getReviewComments(reviewId),
    enabled: !!reviewId,
  });

export const usePrefetchReviewComments = () => {
  const queryClient = useQueryClient();
  const prefetchReviewComments = async (reviewId: string) => {
    await queryClient.prefetchQuery({
      queryKey: ["reviewComments", reviewId],
      queryFn: () => getReviewComments(reviewId),
    });
  };

  return prefetchReviewComments;
};

export default useReviewComments;
