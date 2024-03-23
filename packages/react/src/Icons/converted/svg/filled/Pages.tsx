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
    <path d="M3 5v6h5L7 7l4 1V3H5c-1.1 0-2 .9-2 2m5 8H3v6c0 1.1.9 2 2 2h6v-5l-4 1zm9 4-4-1v5h6c1.1 0 2-.9 2-2v-6h-5zm2-14h-6v5l4-1-1 4h5V5c0-1.1-.9-2-2-2" />
  </svg>
);

export { SvgPages };
