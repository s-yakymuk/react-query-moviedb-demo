import { useMutation, useQueryClient } from "@tanstack/react-query";

import useAccountId from "@/hooks/useAccountId";

import api from "@/api";

import { FAVORITE_MOVIES_QUERY_KEY } from "@/consts";

export interface MarkFavoriteParams {
  media_id: number;
  favorite: boolean;
}

export const useMarkFavorite = () => {
  const queryClient = useQueryClient();
  const account_id = useAccountId();

  return useMutation({
    mutationFn: (params: MarkFavoriteParams) =>
      api.post(`account/${account_id}/favorite`, {
        media_type: "movie",
        ...params,
      }),
    onMutate: (params) => {
      queryClient.setQueryData(
        FAVORITE_MOVIES_QUERY_KEY,
        (data: number[] = []) =>
          params.favorite
            ? [...data, params.media_id]
            : data?.filter((movieId) => movieId !== params.media_id)
      );
    },
    onError: () => {
      queryClient.invalidateQueries({ queryKey: FAVORITE_MOVIES_QUERY_KEY });
    },
  });
};

export default useMarkFavorite;
