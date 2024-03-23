import type { SVGProps } from "react";

const SvgEditNote = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M3 10h11v2H3zm0-2h11V6H3zm0 8h7v-2H3zm15.01-3.13 1.41-1.41 2.12 2.12-1.41 1.41zm-.71.71-5.3 5.3V21h2.12l5.3-5.3z" />
  </svg>
);

export { SvgEditNote };
