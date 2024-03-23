import type { SVGProps } from "react";

const SvgLooks3 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M21 3H3.01v18H21zm-5.99 14H9v-2h4v-2h-2v-2h2V9H9V7h6.01z" />
  </svg>
);

export { SvgLooks3 };
