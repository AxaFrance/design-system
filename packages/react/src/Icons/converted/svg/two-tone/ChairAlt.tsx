import type { SVGProps } from "react";

const SvgChairAlt = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M7 14h10v2H7zM7 5h10v3H7z" opacity={0.3} />
    <path d="M17 10c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H7c-1.1 0-2 .9-2 2v3c0 1.1.9 2 2 2h1v2H7c-1.1 0-2 .9-2 2v7h2v-3h10v3h2v-7c0-1.1-.9-2-2-2h-1v-2zm0 4v2H7v-2zm-7-2v-2h4v2zM7 8V5h10v3z" />
  </svg>
);

export { SvgChairAlt };
