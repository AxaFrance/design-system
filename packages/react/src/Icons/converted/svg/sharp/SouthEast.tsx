import type { SVGProps } from "react";

const SvgSouthEast = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M19 9h-2v6.59L5.41 4 4 5.41 15.59 17H9v2h10z" />
  </svg>
);

export { SvgSouthEast };
