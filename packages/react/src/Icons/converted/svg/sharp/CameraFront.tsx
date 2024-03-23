import type { SVGProps } from "react";

const SvgCameraFront = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M10 20H5v2h5v2l3-3-3-3zm4 0v2h5v-2zM12 8c1.1 0 2-.9 2-2s-.9-2-2-2-1.99.9-1.99 2S10.9 8 12 8m7-8H5v18h14zM7 2h10v10.5c0-1.67-3.33-2.5-5-2.5s-5 .83-5 2.5z" />
  </svg>
);

export { SvgCameraFront };
