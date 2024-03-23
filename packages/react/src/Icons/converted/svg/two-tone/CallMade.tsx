import type { SVGProps } from "react";

const SvgCallMade = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M5.41 20 17 8.41V15h2V5H9v2h6.59L4 18.59z" />
  </svg>
);

export { SvgCallMade };
