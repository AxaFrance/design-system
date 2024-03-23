import type { SVGProps } from "react";

const SvgRoundaboutRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M8 13c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4v1h6.17l-1.59 1.59L18 13l4-4-4-4-1.41 1.41L18.17 8h-4.25C13.44 5.16 10.97 3 8 3 4.69 3 2 5.69 2 9c0 2.97 2.16 5.44 5 5.92V21h2v-8z" />
  </svg>
);

export { SvgRoundaboutRight };
