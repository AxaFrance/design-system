import type { SVGProps } from "react";

const SvgShop2 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M3 9H1v13h18v-2H3z" />
    <path d="M18 5V1h-8v4H5v13h18V5zm-6-2h4v2h-4zm0 12V8l5.5 3.5z" />
  </svg>
);

export { SvgShop2 };
