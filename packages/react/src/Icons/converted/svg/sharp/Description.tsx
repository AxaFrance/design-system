import type { SVGProps } from "react";

const SvgDescription = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M14 2H4v20h16V8zm2 16H8v-2h8zm0-4H8v-2h8zm-3-5V3.5L18.5 9z" />
  </svg>
);

export { SvgDescription };
