import type { SVGProps } from "react";

const SvgSmartDisplay = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M22 4H2v16h20zM9.5 16.5v-9l7 4.5z" />
  </svg>
);

export { SvgSmartDisplay };
