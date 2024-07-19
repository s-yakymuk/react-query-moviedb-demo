import { useState } from "react";
import { create } from "zustand";
import {
  NumberParam,
  StringParam,
  useQueryParams,
  withDefault,
} from "use-query-params";

import useStorage from "./useStorage";

export interface MoviesListParams {
  page?: number;
  query?: string;
}

export interface UseMoviesListParamsResponse {
  params: MoviesListParams;
  updateParams: (update: Partial<MoviesListParams>) => void;
}

// 1. State
export const useStateMoviesListParams = () => {
  const [params, setParams] = useState<MoviesListParams>({ page: 1 });
  const updateParams = (update: Partial<MoviesListParams>) => {
    setParams((currentParams) => ({
      ...currentParams,
      ...update,
    }));
  };

  return { params, updateParams };
};

// 2. Session Storage
export const useStorageMoviesListParams = () => {
  const [params, setParams] = useStorage<MoviesListParams>(
    "movieListParams",
    { page: 1 },
    true
  );
  const updateParams = (update: Partial<MoviesListParams>) => {
    setParams((currentParams) => ({
      ...currentParams,
      ...update,
    }));
  };

  return { params, updateParams };
};

// 3. URL
export const useUrlMoviesListParams = () => {
  const [params, setParams] = useQueryParams({
    page: withDefault(NumberParam, 1),
    query: StringParam,
  });
  const updateParams = (update: Partial<MoviesListParams>) => {
    setParams(
      (currentParams) => ({
        ...currentParams,
        ...update,
      }),
      "pushIn"
    );
  };

  return { params: params as MoviesListParams, updateParams };
};

// 4. Zustand
const useMoviesListParamsStore = create<UseMoviesListParamsResponse>((set) => ({
  params: { page: 1 },
  updateParams: (update) =>
    set((state) => ({ params: { ...state.params, ...update } })),
}));

export const useZustandMoviesListParams = () => {
  return useMoviesListParamsStore();
};

export const useMoviesListParams = (): UseMoviesListParamsResponse => {
  // You can replace hook implementation with one of the 4 options above
  return useUrlMoviesListParams();
};

export default useMoviesListParams;
