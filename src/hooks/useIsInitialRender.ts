import { useRef } from "react";

const useIsInitialRender = (): boolean => {
  const isFirst = useRef(true);

  if (isFirst.current) {
    isFirst.current = false;

    return true;
  }

  return isFirst.current;
};

export default useIsInitialRender;
