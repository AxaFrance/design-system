import type { SVGProps } from "react";

const SvgSdCard = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M20 2H10L4 8v14h16zm-8 6h-2V4h2zm3 0h-2V4h2zm3 0h-2V4h2z" />
  </svg>
);

export { SvgSdCard };
