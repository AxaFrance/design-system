import type { SVGProps } from "react";

const SvgDoorSliding = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M13 19h5V5h-5zm1-8h2v2h-2zM6 19h5V5H6zm2-8h2v2H8z" opacity={0.3} />
    <path d="M20 19V5c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v14H3v2h18v-2zm-9 0H6V5h5zm7 0h-5V5h5z" />
    <path d="M8 11h2v2H8zM14 11h2v2h-2z" />
  </svg>
);

export { SvgDoorSliding };
