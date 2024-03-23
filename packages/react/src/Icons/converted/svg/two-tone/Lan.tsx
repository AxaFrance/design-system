import type { SVGProps } from "react";

const SvgLan = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M10 7V4h4v3zM9 17v3H5v-3zm10 0v3h-4v-3z" opacity={0.3} />
    <path d="M13 22h8v-7h-3v-4h-5V9h3V2H8v7h3v2H6v4H3v7h8v-7H8v-2h8v2h-3zM10 7V4h4v3zM9 17v3H5v-3zm10 0v3h-4v-3z" />
  </svg>
);

export { SvgLan };
