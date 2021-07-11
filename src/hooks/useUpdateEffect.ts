/* eslint-disable consistent-return, react-hooks/exhaustive-deps */
import { useEffect } from "react";
import useIsInitialRender from "./useIsInitialRender";

const useUpdateEffect: typeof useEffect = (effect, deps) => {
  const isFirstMount = useIsInitialRender();

  useEffect(() => {
    if (!isFirstMount) {
      return effect();
    }
  }, deps);
};

export default useUpdateEffect;
