import type { SVGProps } from "react";

const SvgDiamond = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <g fill="none">
      <path d="M0 0h24v24H0z" />
      <path d="M0 0h24v24H0z" />
    </g>
    <path d="M12.16 3h-.32L9.21 8.25h5.58zM16.46 8.25h5.16l-2.07-4.14A2 2 0 0 0 17.76 3h-3.93zM21.38 9.75h-8.63V20.1zM11.25 20.1V9.75H2.62zM7.54 8.25 10.16 3H6.24a2 2 0 0 0-1.79 1.11L2.38 8.25z" />
  </svg>
);

export { SvgDiamond };
