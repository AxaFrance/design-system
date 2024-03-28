import type { SVGProps } from "react";

const SvgTransitEnterexit = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M15.98 6 9 12.77V8H6v10h10v-3h-4.85L18 8.03z" />
  </svg>
);

export { SvgTransitEnterexit };
