import type { SVGProps } from "react";

const SvgFilterList = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M10 18h4v-2h-4zM3 6v2h18V6zm3 7h12v-2H6z" />
  </svg>
);

export { SvgFilterList };
