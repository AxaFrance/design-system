import type { SVGProps } from "react";

const SvgExpandCircleDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m3.79 9.71-3.08 3.08c-.39.39-1.02.39-1.42 0l-3.08-3.08c-.39-.39-.39-1.03 0-1.42a.996.996 0 0 1 1.41 0L12 12.67l2.38-2.38a.996.996 0 0 1 1.41 0c.39.39.39 1.03 0 1.42" />
  </svg>
);

export { SvgExpandCircleDown };
