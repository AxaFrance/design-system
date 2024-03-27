import type { SVGProps } from "react";

const SvgSyncAlt = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M7.41 13.41 6 12l-4 4 4 4 1.41-1.41L5.83 17H21v-2H5.83zM16.59 10.59 18 12l4-4-4-4-1.41 1.41L18.17 7H3v2h15.17z" />
  </svg>
);

export { SvgSyncAlt };
