import type { SVGProps } from "react";

const SvgTabUnselected = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M1 9h2V7H1zm0 4h2v-2H1zm0-8h2V3c-1.1 0-2 .9-2 2m8 16h2v-2H9zm-8-4h2v-2H1zm2 4v-2H1c0 1.1.9 2 2 2M21 3h-8v6h10V5c0-1.1-.9-2-2-2m0 14h2v-2h-2zM9 5h2V3H9zM5 21h2v-2H5zM5 5h2V3H5zm16 16c1.1 0 2-.9 2-2h-2zm0-8h2v-2h-2zm-8 8h2v-2h-2zm4 0h2v-2h-2z" />
  </svg>
);

export { SvgTabUnselected };
