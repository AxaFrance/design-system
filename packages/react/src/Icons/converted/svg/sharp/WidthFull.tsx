import type { SVGProps } from "react";

const SvgWidthFull = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M22 4H2v16h20zM4 6h1v12H4zm16 12h-1V6h1z" />
  </svg>
);

export { SvgWidthFull };
