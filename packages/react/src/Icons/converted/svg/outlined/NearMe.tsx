import type { SVGProps } from "react";

const SvgNearMe = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="m17.27 6.73-4.24 10.13-1.32-3.42-.32-.83-.82-.32-3.43-1.33zM21 3 3 10.53v.98l6.84 2.65L12.48 21h.98z" />
  </svg>
);

export { SvgNearMe };
