import type { SVGProps } from "react";

const SvgOpenInNewOff = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="m16.79 5.8-1.94-1.94a.506.506 0 0 1 .36-.86h5.29c.28 0 .5.22.5.5v5.29c0 .45-.54.67-.85.35L18.21 7.2l-4.09 4.09-1.41-1.41zM19 13v3.17l2 2V13c0-.55-.45-1-1-1s-1 .45-1 1m.07 8.9-.9-.9H5a2 2 0 0 1-2-2V5.83l-.9-.9a.996.996 0 1 1 1.41-1.41l16.97 16.97a.996.996 0 1 1-1.41 1.41m-2.9-2.9-4.88-4.88-.88.88A.996.996 0 1 1 9 13.59l.88-.88L5 7.83V19zM7.83 5H11c.55 0 1-.45 1-1s-.45-1-1-1H5.83z" />
  </svg>
);

export { SvgOpenInNewOff };
