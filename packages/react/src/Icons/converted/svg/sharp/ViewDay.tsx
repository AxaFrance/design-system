import type { SVGProps } from "react";

const SvgViewDay = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M2 21h19v-3H2zM21 8H2v8h19zM2 3v3h19V3z" />
  </svg>
);

export { SvgViewDay };
