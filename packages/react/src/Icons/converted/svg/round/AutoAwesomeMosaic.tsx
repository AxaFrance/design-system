import type { SVGProps } from "react";

const SvgAutoAwesomeMosaic = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M3 5v14a2 2 0 0 0 2 2h6V3H5a2 2 0 0 0-2 2m16-2h-6v8h8V5c0-1.1-.9-2-2-2m-6 18h6c1.1 0 2-.9 2-2v-6h-8z" />
  </svg>
);

export { SvgAutoAwesomeMosaic };
