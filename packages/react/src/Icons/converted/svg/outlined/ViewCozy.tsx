import type { SVGProps } from "react";

const SvgViewCozy = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M7.25 7.25h4v4h-4zM12.75 7.25h4v4h-4zM7.25 12.75h4v4h-4zM12.75 12.75h4v4h-4z" />
    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 14H4V6h16z" />
  </svg>
);

export { SvgViewCozy };
