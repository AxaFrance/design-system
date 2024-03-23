import type { SVGProps } from "react";

const SvgViewKanban = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M21 3H3v18h18zM9 17H7V7h2zm4-5h-2V7h2zm4 3h-2V7h2z" />
  </svg>
);

export { SvgViewKanban };
