import type { SVGProps } from "react";

const SvgNavigateNext = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="m10.02 18 6-6-6-6-1.41 1.41L13.19 12l-4.58 4.59z" />
  </svg>
);

export { SvgNavigateNext };
