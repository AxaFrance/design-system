import type { SVGProps } from "react";

const SvgAirplaneTicket = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M22 4H2.01v6c1.1 0 1.99.9 1.99 2s-.89 2-2 2v6h20zm-4.27 9.3-8.86 2.36-1.66-2.88.93-.25 1.26.99 2.39-.64-2.4-4.16 1.4-.38 4.01 3.74 2.44-.65a.967.967 0 0 1 1.18.68.99.99 0 0 1-.69 1.19" />
  </svg>
);

export { SvgAirplaneTicket };
