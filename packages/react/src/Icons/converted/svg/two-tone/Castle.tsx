import type { SVGProps } from "react";

const SvgCastle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M17 7H7v6H3v6h5v-1c0-2.21 1.79-4 4-4s4 1.79 4 4v1h5v-6h-4zm-6 5H9V9h2zm4 0h-2V9h2z"
      opacity={0.3}
    />
    <path d="M21 9v2h-2V3h-2v2h-2V3h-2v2h-2V3H9v2H7V3H5v8H3V9H1v12h9v-3c0-1.1.9-2 2-2s2 .9 2 2v3h9V9zm0 10h-5v-1c0-2.21-1.79-4-4-4s-4 1.79-4 4v1H3v-6h4V7h10v6h4z" />
    <path d="M9 9h2v3H9zM13 9h2v3h-2z" />
  </svg>
);

export { SvgCastle };
