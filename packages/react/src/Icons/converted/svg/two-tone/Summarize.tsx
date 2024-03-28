import type { SVGProps } from "react";

const SvgSummarize = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M14 5H5v14h14v-9h-5zM8 17c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m0-4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m0-4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1"
      opacity={0.3}
    />
    <circle cx={8} cy={8} r={1} />
    <path d="M15 3H5c-1.1 0-1.99.9-1.99 2L3 19c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V9zm4 16H5V5h9v5h5z" />
    <circle cx={8} cy={12} r={1} />
    <circle cx={8} cy={16} r={1} />
  </svg>
);

export { SvgSummarize };
