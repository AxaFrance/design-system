import type { SVGProps } from "react";

const SvgVideocamOff = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M21 16.61V6.5l-4 4V6h-6.61zM3.41 1.86 2 3.27 4.73 6H3v12h13.73l3 3 1.41-1.41z" />
  </svg>
);

export { SvgVideocamOff };
