import { useCallback, useSyncExternalStore } from "react";

export const useIsSmallScreen = (breakPointToCheck: number) => {
  const subscribe = useCallback((listener: () => void) => {
    window.addEventListener("resize", listener);
    return () => {
      window.removeEventListener("resize", listener);
    };
  }, []);

  const getSnapshot = useCallback(() => {
    return window.innerWidth < breakPointToCheck;
  }, [breakPointToCheck]);

  const getServerSnapshot = useCallback(() => false, []);

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
};
