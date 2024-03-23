import type { SVGProps } from "react";

const SvgBrokenImage = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="m13.99 15.41-4-4-4 4-.99-.99V19h14v-6.57l-1.01-1.01zM5 11.59l.99 1 4-4 4 4 4-4.01L19 9.59V5H5z"
      opacity={0.3}
    />
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5v-4.58l.99.99 4-4 4 4 4-3.99L19 12.43zm0-9.41-1.01-1.01-4 4.01-4-4-4 4-.99-1V5h14z" />
  </svg>
);

export { SvgBrokenImage };
