import type { SVGProps } from "react";

const SvgPages = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M3 3v8h5L7 7l4 1V3zm5 10H3v8h8v-5l-4 1zm9 4-4-1v5h8v-8h-5zm4-14h-8v5l4-1-1 4h5z" />
  </svg>
);

export { SvgPages };
