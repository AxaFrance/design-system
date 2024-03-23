import type { SVGProps } from "react";

const SvgRequestQuote = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M14 2H4v20h16V8zm1 10h-4v1h4v5h-2v1h-2v-1H9v-2h4v-1H9v-5h2V9h2v1h2zm-2-4V3.5L17.5 8z" />
  </svg>
);

export { SvgRequestQuote };
