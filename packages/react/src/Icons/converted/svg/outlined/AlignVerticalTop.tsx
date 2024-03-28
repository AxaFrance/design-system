import type { SVGProps } from "react";

const SvgAlignVerticalTop = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M22 2v2H2V2zM7 22h3V6H7zm7-6h3V6h-3z" />
  </svg>
);

export { SvgAlignVerticalTop };
