import type { SVGProps } from "react";

const SvgPayment = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M22 4H2v16h20zm-2 14H4v-6h16zm0-10H4V6h16z" />
  </svg>
);

export { SvgPayment };
