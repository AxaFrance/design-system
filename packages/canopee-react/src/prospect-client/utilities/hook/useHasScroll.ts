import { type RefObject, useState, useLayoutEffect } from "react";

export type HasScrollState = {
  horizontal: boolean;
  vertical: boolean;
};

const defaultHasScrollState: HasScrollState = {
  horizontal: false,
  vertical: false,
};

export const useHasScroll = (ref: RefObject<HTMLElement | null>) => {
  const [hasScroll, setHasScroll] = useState<HasScrollState>(
    defaultHasScrollState,
  );

  useLayoutEffect(() => {
    const htmlElement = ref.current;

    const updateHasScrollState = () => {
      if (htmlElement === null) {
        setHasScroll(defaultHasScrollState);
        return;
      }

      setHasScroll({
        horizontal: htmlElement.scrollWidth > htmlElement.clientWidth,
        vertical: htmlElement.scrollHeight > htmlElement.clientHeight,
      });
    };

    updateHasScrollState();

    const observer = new ResizeObserver(updateHasScrollState);
    if (htmlElement) {
      observer.observe(htmlElement, {
        box: "content-box",
      });
    }

    return () => observer.disconnect();
  }, [ref]);

  return hasScroll;
};
