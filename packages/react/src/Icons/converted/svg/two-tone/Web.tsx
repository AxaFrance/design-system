import type { SVGProps } from "react";

const SvgWeb = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M0 0h24v24H0z" />
    </g>
    <path
      d="M4 9h10.5v3.5H4zM4 14.5h10.5V18H4zM16.5 9H20v9h-3.5z"
      opacity={0.3}
    />
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m-5.5 14H4v-3.5h10.5zm0-5.5H4V9h10.5zM20 18h-3.5V9H20z" />
  </svg>
);

export { SvgWeb };
