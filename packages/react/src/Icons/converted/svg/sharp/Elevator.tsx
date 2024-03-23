import type { SVGProps } from "react";

const SvgElevator = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M21 3H3v18h18zM8.5 6a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5m2.5 8h-1v4H7v-4H6V9.5h5zm4.5 3L13 13h5zM13 11l2.5-4 2.5 4z" />
  </svg>
);

export { SvgElevator };
