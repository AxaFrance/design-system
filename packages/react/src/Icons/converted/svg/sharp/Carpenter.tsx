import type { SVGProps } from "react";

const SvgCarpenter = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M7 1.5 3.11 5.39l8.13 11.67-1.41 1.41 4.24 4.24 7.07-7.07zm5.66 16.97 4.24-4.24 1.41 1.41-4.24 4.24z" />
  </svg>
);

export { SvgCarpenter };
