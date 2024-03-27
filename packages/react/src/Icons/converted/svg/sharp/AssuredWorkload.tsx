import type { SVGProps } from "react";

const SvgAssuredWorkload = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M5 10h2v7H5zM11 10h2v7h-2zM22 6 12 1 2 6v2h20zM2 19v2h12.4c-.21-.64-.32-1.31-.36-2zM19 12.26V10h-2v3.26zM20 14l-4 2v2.55c0 2.52 1.71 4.88 4 5.45 2.29-.57 4-2.93 4-5.45V16zm-.72 7-2.03-2.03 1.06-1.06.97.97 2.41-2.38 1.06 1.06z" />
  </svg>
);

export { SvgAssuredWorkload };
