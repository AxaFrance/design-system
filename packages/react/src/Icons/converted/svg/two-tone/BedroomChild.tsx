import type { SVGProps } from "react";

const SvgBedroomChild = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M4 20h16V4H4zm2-7.13c0-1 .62-1.85 1.5-2.2V9c0-1.1.9-2 2-2h5c1.1 0 2 .9 2 2v1.67c.88.35 1.5 1.2 1.5 2.2V17h-1.5v-1.5h-9V17H6z"
      opacity={0.3}
    />
    <path d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 18H4V4h16z" />
    <path d="M7.5 15.5h9V17H18v-4.13c0-1-.62-1.85-1.5-2.2V9c0-1.1-.9-2-2-2h-5c-1.1 0-2 .9-2 2v1.67c-.88.35-1.5 1.2-1.5 2.2V17h1.5zm1.5-7h6v2H9zM8.37 12h7.27c.48 0 .87.39.87.87V14h-9v-1.13H7.5c0-.48.39-.87.87-.87" />
  </svg>
);

export { SvgBedroomChild };
