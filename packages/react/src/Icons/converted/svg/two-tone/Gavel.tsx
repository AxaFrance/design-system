import type { SVGProps } from "react";

const SvgGavel = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M1 21h12v2H1zM5.24 8.07l2.83-2.83 14.14 14.14-2.83 2.83zM12.32 1l5.66 5.66-2.83 2.83-5.66-5.66zM3.83 9.48l5.66 5.66-2.83 2.83L1 12.31z" />
  </svg>
);

export { SvgGavel };
