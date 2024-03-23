import type { SVGProps } from "react";

const SvgFirstPage = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M18.41 16.59 13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z" />
    <path fill="none" d="M24 24H0V0h24z" />
  </svg>
);

export { SvgFirstPage };
