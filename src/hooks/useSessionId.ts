import { useQuery } from "@tanstack/react-query";

import api from "@/api";

interface GetRequestTokenResponse {
  request_token: string;
}

interface CreateSessionResponse {
  session_id: string;
}

const getSessionId = async () => {
  try {
    const {
      data: { request_token },
    } = await api.get<GetRequestTokenResponse>("authentication/token/new");

    await api.post("authentication/token/validate_with_login", {
      request_token,
      username: import.meta.env.VITE_MOVIE_DB_USERNAME,
      password: import.meta.env.VITE_MOVIE_DB_PASSWORD,
    });

    const {
      data: { session_id },
    } = await api.post<CreateSessionResponse>("authentication/session/new", {
      request_token,
    });

    api.interceptors.request.use((config) => ({
      ...config,
      params: {
        ...config.params,
        session_id,
      },
    }));

    return session_id;
  } catch (err) {
    if (err instanceof Error) {
      return Promise.reject(err.message);
    }
    return Promise.reject(JSON.stringify(err));
  }
};

export const useSessionId = () => {
  return useQuery<string, string>({
    queryKey: ["sessionId"],
    queryFn: getSessionId,
    staleTime: Infinity,
  });
};

export default useSessionId;
