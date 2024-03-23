import type { SVGProps } from "react";

const SvgVideoFile = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M14 2H4v20h16V8zm-1 7V3.5L18.5 9zm1 5 2-1.06v4.12L14 16v2H8v-6h6z" />
  </svg>
);

export { SvgVideoFile };
