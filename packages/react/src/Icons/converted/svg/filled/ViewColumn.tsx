import type { SVGProps } from "react";

const SvgViewColumn = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M14.67 5v14H9.33V5zm1 14H21V5h-5.33zm-7.34 0V5H3v14z" />
  </svg>
);

export { SvgViewColumn };
