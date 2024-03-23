import type { SVGProps } from "react";

const SvgAirlineSeatFlat = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M22 11v2H9V9c0-1.1.9-2 2-2h7c2.21 0 4 1.79 4 4M2 15c0 .55.45 1 1 1h5v1c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-1h5c.55 0 1-.45 1-1s-.45-1-1-1H3c-.55 0-1 .45-1 1m5.14-2.9a3 3 0 0 0-.04-4.24 3 3 0 0 0-4.24.04 3 3 0 0 0 .04 4.24 3 3 0 0 0 4.24-.04" />
  </svg>
);

export { SvgAirlineSeatFlat };
