import type { SVGProps } from "react";

const SvgAspectRatio = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M3 19.01h18V4.99H3zM14 15h3v-3h2v5h-5zM5 7h5v2H7v3H5z"
      opacity={0.3}
    />
    <path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16.01H3V4.99h18zM7 9h3V7H5v5h2zm12 3h-2v3h-3v2h5z" />
  </svg>
);

export { SvgAspectRatio };
