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
    <path d="M14.17 11H13V5h-2v6H9.83L12 13.17z" opacity={0.3} />
    <path d="M19 9h-4V3H9v6H5l7 7zm-8 2V5h2v6h1.17L12 13.17 9.83 11zm-6 7h14v2H5z" />
  </svg>
);

export { SvgGetApp };
