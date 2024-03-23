import type { SVGProps } from "react";

const SvgMms = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M4 17.17 5.17 16H20V4H4zM8.5 9.5l2.5 3.01L14.5 8l4.5 6H5z"
      opacity={0.3}
    />
    <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 14H5.17L4 17.17V4h16zm-5.5-8L11 12.51 8.5 9.5 5 14h14z" />
  </svg>
);

export { SvgMms };
