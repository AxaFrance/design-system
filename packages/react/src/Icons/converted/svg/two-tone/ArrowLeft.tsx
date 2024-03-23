import type { SVGProps } from "react";

const SvgArrowLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M24 0v24H0V0z" opacity={0.87} />
    <path d="m14 7-5 5 5 5z" />
  </svg>
);

export { SvgArrowLeft };
