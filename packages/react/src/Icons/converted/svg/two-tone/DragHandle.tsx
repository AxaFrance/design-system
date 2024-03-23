import type { SVGProps } from "react";

const SvgDragHandle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M4 9h16v2H4zm0 4h16v2H4z" />
  </svg>
);

export { SvgDragHandle };
