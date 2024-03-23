import type { SVGProps } from "react";

const SvgRollerShadesClosed = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M6 5h12v10H6z" opacity={0.3} />
    <path d="M20 19V3H4v16H2v2h8.25c0 .97.78 1.75 1.75 1.75s1.75-.78 1.75-1.75H22v-2zm-9 0H6v-2h5zm7 0h-5v-2h5zm0-4H6V5h12z" />
  </svg>
);

export { SvgRollerShadesClosed };
