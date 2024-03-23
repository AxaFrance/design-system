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
    <path d="M3 21h8V3H3zM21 3h-8v8h8zm-8 18h8v-8h-8z" />
  </svg>
);

export { SvgAutoAwesomeMosaic };
