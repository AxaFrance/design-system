import type { SVGProps } from "react";

const SvgArrowLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="m14 7-5 5 5 5z" />
    <path fill="none" d="M24 0v24H0V0z" />
  </svg>
);

export { SvgArrowLeft };
