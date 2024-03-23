import type { SVGProps } from "react";

const SvgQueuePlayNext = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M23 3H1v16h7v2h8v-2h2v-2H3V5h18v8h2zm-10 7V7h-2v3H8v2h3v3h2v-3h3v-2zm11 8-4.5 4.5L18 21l3-3-3-3 1.5-1.5z" />
  </svg>
);

export { SvgQueuePlayNext };
