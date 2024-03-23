import type { SVGProps } from "react";

const SvgAlignHorizontalRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M20 2h2v20h-2zM2 10h16V7H2zm6 7h10v-3H8z" />
  </svg>
);

export { SvgAlignHorizontalRight };
