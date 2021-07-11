import { useQuery } from "react-query";

import api from "api";

export interface AccountDetailsResponse {
  id: number;
  name: string;
}

export const useAccountId = () => {
  const { data } = useQuery(
    "accountId",
    () => api.get<AccountDetailsResponse>("account").then((res) => res.data),
    {
      staleTime: Infinity,
    }
  );

  return data?.id;
};

export default useAccountId;
