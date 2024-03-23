import type { SVGProps } from "react";

const SvgDesk = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M2 6v12h2V8h10v10h2v-2h4v2h2V6zm18 2v2h-4V8zm-4 6v-2h4v2z" />
  </svg>
);

export { SvgDesk };
