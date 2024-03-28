import type { SVGProps } from "react";

const SvgPhonelinkErase = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="m13 8.2-1-1-4 4-4-4-1 1 4 4-4 4 1 1 4-4 4 4 1-1-4-4zM21 1H7v5h2V4h10v16H9v-2H7v5h14z" />
  </svg>
);

export { SvgPhonelinkErase };
