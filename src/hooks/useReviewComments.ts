import { useQuery } from "@tanstack/react-query";

import { jsonServerSlowGet } from "@/api";

import { CommentModel } from "@/models";

export const useReviewComments = (reviewId?: string) =>
  useQuery({
    queryKey: ["reviewComments", reviewId],
    queryFn: () =>
      jsonServerSlowGet<CommentModel[]>(`comments?reviewId=${reviewId}`),
    enabled: !!reviewId,
  });

export default useReviewComments;
