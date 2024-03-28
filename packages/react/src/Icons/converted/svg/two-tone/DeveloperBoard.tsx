import type { SVGProps } from "react";

const SvgDeveloperBoard = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0zm0 0h24v24H0z" />
    <path
      d="M4 19h14V5H4zm8-12h4v3h-4zm0 4h4v6h-4zM6 7h5v5H6zm0 6h5v4H6z"
      opacity={0.3}
    />
    <path d="M6 13h5v4H6zm0-6h5v5H6zm6 0h4v3h-4zm0 4h4v6h-4zm10-2V7h-2V5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-2h2v-2h-2v-2h2v-2h-2V9zm-4 10H4V5h14z" />
  </svg>
);

export { SvgDeveloperBoard };
