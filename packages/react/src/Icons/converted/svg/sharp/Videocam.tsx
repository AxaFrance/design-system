import type { SVGProps } from "react";

const SvgVideocam = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M17 10.5V6H3v12h14v-4.5l4 4v-11z" />
  </svg>
);

export { SvgVideocam };
