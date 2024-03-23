import type { SVGProps } from "react";

const SvgCastle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <g fill="none">
      <path d="M0 0h24v24H0z" />
      <path d="M0 0h24v24H0z" />
    </g>
    <path d="M22 9c-.55 0-1 .45-1 1v1h-2V4c0-.55-.45-1-1-1s-1 .45-1 1v1h-2V4c0-.55-.45-1-1-1s-1 .45-1 1v1h-2V4c0-.55-.45-1-1-1s-1 .45-1 1v1H7V4c0-.55-.45-1-1-1s-1 .45-1 1v7H3v-1c0-.55-.45-1-1-1s-1 .45-1 1v9c0 1.1.9 2 2 2h7v-3c0-1.1.9-2 2-2s2 .9 2 2v3h7c1.1 0 2-.9 2-2v-9c0-.55-.45-1-1-1m-11 3H9V9h2zm4 0h-2V9h2z" />
  </svg>
);

export { SvgCastle };
