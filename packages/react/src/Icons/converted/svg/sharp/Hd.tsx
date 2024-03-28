import type { SVGProps } from "react";

const SvgHd = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M21 3H3v18h18zM11 15H9.5v-2h-2v2H6V9h1.5v2.5h2V9H11zm2-6h4c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1h-4zm1.5 4.5h2v-3h-2z" />
  </svg>
);

export { SvgHd };
