import type { SVGProps } from "react";

const SvgInsertComment = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M20 4v13.17L18.83 16H4V4zm0-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2m-2 10H6v2h12zm0-3H6v2h12zm0-3H6v2h12z" />
  </svg>
);

export { SvgInsertComment };
