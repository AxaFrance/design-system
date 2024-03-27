import type { SVGProps } from "react";

const SvgSchema = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M14 9v2h-3V9H8.5V7H11V1H4v6h2.5v2H4v6h2.5v2H4v6h7v-6H8.5v-2H11v-2h3v2h7V9zM6 3h3v2H6zm3 18H6v-2h3zm0-8H6v-2h3zm10 0h-3v-2h3z" />
  </svg>
);

export { SvgSchema };
