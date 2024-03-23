import type { SVGProps } from "react";

const SvgNotInterested = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M12 22c5.52 0 10-4.48 10-10S17.52 2 12 2 2 6.48 2 12s4.48 10 10 10m0-18c4.42 0 8 3.58 8 8 0 1.85-.63 3.55-1.69 4.9L7.1 5.69A7.9 7.9 0 0 1 12 4M5.69 7.1 16.9 18.31A7.9 7.9 0 0 1 12 20c-4.42 0-8-3.58-8-8 0-1.85.63-3.55 1.69-4.9" />
  </svg>
);

export { SvgNotInterested };
