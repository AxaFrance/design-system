import type { SVGProps } from "react";

const SvgMouse = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M13 3.16V9h5a6.005 6.005 0 0 0-5-5.84m-2 0C8.19 3.63 6.04 6.06 6 9h5zM11 11H6v4c0 3.31 2.69 6 6 6s6-2.69 6-6v-4z"
      opacity={0.3}
    />
    <path d="M20 9c-.04-4.39-3.6-7.93-8-7.93S4.04 4.61 4 9v6c0 4.42 3.58 8 8 8s8-3.58 8-8zm-7-5.84c2.81.47 4.96 2.9 5 5.84h-5zm-2 0V9H6a6.005 6.005 0 0 1 5-5.84M18 15c0 3.31-2.69 6-6 6s-6-2.69-6-6v-4h12z" />
  </svg>
);

export { SvgMouse };
