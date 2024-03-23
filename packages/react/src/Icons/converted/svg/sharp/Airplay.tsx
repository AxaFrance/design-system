import type { SVGProps } from "react";

const SvgAirplay = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M6 22h12l-6-6zM23 3H1v16h6v-2H3V5h18v12h-4v2h6z" />
  </svg>
);

export { SvgAirplay };
