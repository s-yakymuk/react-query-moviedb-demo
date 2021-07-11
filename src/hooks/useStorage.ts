import { useState, useEffect } from "react";

import { get, set } from "../helpers/storage";

export const useStorage = <T>(
  storageKey: string,
  initialState: T,
  isSessionStorage = false
) => {
  const [state, setState] = useState<T>(() =>
    get(storageKey, initialState, isSessionStorage)
  );

  useEffect(() => {
    set(storageKey, state, isSessionStorage);
  }, [storageKey, state, isSessionStorage]);

  return [state, setState] as const;
};

export default useStorage;
