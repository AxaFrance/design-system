import type { SVGProps } from "react";

const SvgLogout = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M5 5h7V3H3v18h9v-2H5z" />
    <path d="m21 12-4-4v3H9v2h8v3z" />
  </svg>
);

export { SvgLogout };
