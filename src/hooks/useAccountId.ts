import { useQuery } from "@tanstack/react-query";

import api from "@/api";

export interface AccountDetailsResponse {
  id: number;
  name: string;
}

export const useAccountId = () => {
  const { data } = useQuery({
    queryKey: ["accountId"] as const,
    queryFn: () =>
      api.get<AccountDetailsResponse>("account").then((res) => res.data),
    staleTime: Infinity,
  });

  return data?.id;
};

export default useAccountId;
