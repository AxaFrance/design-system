import type { SVGProps } from "react";

const SvgStayCurrentLandscape = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M1 19h22V5H1zM19 7v10H5V7z" />
  </svg>
);

export { SvgStayCurrentLandscape };
