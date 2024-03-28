import type { SVGProps } from "react";

const SvgGetApp = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M19 9h-4V3H9v6H5l7 7zM5 18v2h14v-2z" />
  </svg>
);

export { SvgGetApp };
