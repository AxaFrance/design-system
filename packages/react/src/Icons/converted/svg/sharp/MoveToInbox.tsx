import type { SVGProps } from "react";

const SvgMoveToInbox = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M21 3H3v18h18zm-2 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19zm-3-5h-2V7h-4v3H8l4 4z" />
  </svg>
);

export { SvgMoveToInbox };
