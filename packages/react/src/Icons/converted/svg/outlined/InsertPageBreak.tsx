import type { SVGProps } from "react";

const SvgInsertPageBreak = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M18 20H6v-3H4v3c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-3h-2zM6 4h7v5h5v2h2V8l-6-6H6c-1.1 0-2 .9-2 2v7h2zM9 13h6v2H9zM17 13h6v2h-6zM1 13h6v2H1z" />
  </svg>
);

export { SvgInsertPageBreak };
