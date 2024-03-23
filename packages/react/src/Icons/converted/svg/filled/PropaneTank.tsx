import type { SVGProps } from "react";

const SvgPropaneTank = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M4 15v3c0 2.21 1.79 4 4 4h8c2.21 0 4-1.79 4-4v-3zM20 13v-3c0-1.86-1.28-3.41-3-3.86V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v2.14c-1.72.45-3 2-3 3.86v3zM9 4h6v2h-2c0-.55-.45-1-1-1s-1 .45-1 1H9z" />
  </svg>
);

export { SvgPropaneTank };
