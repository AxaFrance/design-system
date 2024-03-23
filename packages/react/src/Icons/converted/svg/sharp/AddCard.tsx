import type { SVGProps } from "react";

const SvgAddCard = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M2.01 4 2 20h12v-2H4v-6h18V4zM20 8H4V6h16zm4 9v2h-3v3h-2v-3h-3v-2h3v-3h2v3z" />
  </svg>
);

export { SvgAddCard };
