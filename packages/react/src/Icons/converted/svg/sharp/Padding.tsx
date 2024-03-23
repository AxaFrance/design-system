import type { SVGProps } from "react";

const SvgPadding = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M3 3v18h18V3zm6 6H7V7h2zm4 0h-2V7h2zm4 0h-2V7h2z" />
  </svg>
);

export { SvgPadding };
