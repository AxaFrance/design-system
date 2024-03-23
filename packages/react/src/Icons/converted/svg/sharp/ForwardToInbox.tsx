import type { SVGProps } from "react";

const SvgForwardToInbox = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M22 4H2v16h11v-2H4V8l8 5 8-5v5h2zm-10 7L4 6h16zm7 4 4 4-4 4v-3h-4v-2h4z" />
  </svg>
);

export { SvgForwardToInbox };
