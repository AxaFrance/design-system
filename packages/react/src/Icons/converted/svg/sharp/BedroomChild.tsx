import type { SVGProps } from "react";

const SvgBedroomChild = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M9 8.5h6v2H9zM7.51 12h9v2h-9z" />
    <path d="M22 2H2v20h20zm-4 15h-1.5v-1.5h-9V17H6v-6.32l1.5-.01V7h9v3.67H18z" />
  </svg>
);

export { SvgBedroomChild };
