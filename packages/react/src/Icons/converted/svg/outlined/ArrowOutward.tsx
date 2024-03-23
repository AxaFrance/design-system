import type { SVGProps } from "react";

const SvgArrowOutward = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M6 6v2h8.59L5 17.59 6.41 19 16 9.41V18h2V6z" />
  </svg>
);

export { SvgArrowOutward };
