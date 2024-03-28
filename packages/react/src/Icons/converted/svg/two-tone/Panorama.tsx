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
    <path d="M3 18h18V6H3zm5.5-5.5 2.5 3.01L14.5 11l4.5 6H5z" opacity={0.3} />
    <path d="M21 4H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 14H3V6h18zm-6.5-7L11 15.51 8.5 12.5 5 17h14z" />
  </svg>
);

export { SvgPanorama };
