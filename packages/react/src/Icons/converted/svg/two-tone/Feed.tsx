import type { SVGProps } from "react";

const SvgFeed = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M15 5H5v14h14V9h-4zM7 7h5v2H7zm10 10H7v-2h10zm0-6v2H7v-2z"
      opacity={0.3}
    />
    <path d="M7 13h10v-2H7zm0 4h10v-2H7zm9-14H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8zm3 16H5V5h10v4h4zM12 7H7v2h5z" />
  </svg>
);

export { SvgFeed };
