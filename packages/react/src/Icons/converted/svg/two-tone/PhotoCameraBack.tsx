import type { SVGProps } from "react";

const SvgPhotoCameraBack = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="m15.95 7-1.83-2H9.88L8.05 7H4v12h16V7zM6 17l3-4 2.25 3 3-4L18 17z"
      opacity={0.3}
    />
    <path d="M20 5h-3.17L15 3H9L7.17 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 14H4V7h4.05l1.83-2h4.24l1.83 2H20zm-8.75-3L9 13l-3 4h12l-3.75-5z" />
  </svg>
);

export { SvgPhotoCameraBack };
