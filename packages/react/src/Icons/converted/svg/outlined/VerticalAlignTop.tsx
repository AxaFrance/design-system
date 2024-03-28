import type { SVGProps } from "react";

const SvgVerticalAlignTop = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M8 11h3v10h2V11h3l-4-4zM4 3v2h16V3z" />
  </svg>
);

export { SvgVerticalAlignTop };
