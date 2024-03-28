import type { SVGProps } from "react";

const SvgEqualizer = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M10 20h4V4h-4zm-6 0h4v-8H4zM16 9v11h4V9z" />
  </svg>
);

export { SvgEqualizer };
