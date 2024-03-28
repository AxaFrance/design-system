import type { SVGProps } from "react";

const SvgPanorama = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M23 20V4H1v16zM8.5 12.5l2.5 3.01L14.5 11l4.5 6H5z" />
  </svg>
);

export { SvgPanorama };
