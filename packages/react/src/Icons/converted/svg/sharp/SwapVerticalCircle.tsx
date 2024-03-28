import type { SVGProps } from "react";

const SvgSwapVerticalCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2M6.5 9 10 5.5 13.5 9H11v4H9V9zm7.5 9.5L10.5 15H13v-4h2v4h2.5z" />
  </svg>
);

export { SvgSwapVerticalCircle };
