import type { SVGProps } from "react";

const SvgDelete = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M6 21h12V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z" />
  </svg>
);

export { SvgDelete };
