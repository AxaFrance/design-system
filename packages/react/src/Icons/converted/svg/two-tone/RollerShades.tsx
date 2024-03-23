import type { SVGProps } from "react";

const SvgRollerShades = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M6 5h12v6H6z" opacity={0.3} />
    <path d="M20 19V3H4v16H2v2h20v-2zm-2 0H6v-6h5v1.82A1.746 1.746 0 0 0 12 18a1.746 1.746 0 0 0 1-3.18V13h5zm0-8H6V5h12z" />
  </svg>
);

export { SvgRollerShades };
