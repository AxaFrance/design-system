import type { SVGProps } from "react";

const SvgSwapHorizontalCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12s4.48 10 10 10 10-4.48 10-10m-7-5.5 3.5 3.5-3.5 3.5V11h-4V9h4zm-6 11L5.5 14 9 10.5V13h4v2H9z" />
  </svg>
);

export { SvgSwapHorizontalCircle };
