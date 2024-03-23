import type { SVGProps } from "react";

const SvgCropSquare = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M20 4H4v16h16zm-2 14H6V6h12z" />
  </svg>
);

export { SvgCropSquare };
