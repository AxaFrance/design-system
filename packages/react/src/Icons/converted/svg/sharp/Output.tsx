import type { SVGProps } from "react";

const SvgOutput = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="m17 17 5-5-5-5-1.41 1.41L18.17 11H9v2h9.17l-2.58 2.59z" />
    <path d="M19 19H5V5h14v2h2V3H3v18h18v-4h-2z" />
  </svg>
);

export { SvgOutput };
