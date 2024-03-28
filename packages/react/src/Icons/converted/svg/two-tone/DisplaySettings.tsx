import type { SVGProps } from "react";

const SvgDisplaySettings = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M4 17h16V5H4zm14-3.25h-8v-1.5h8zM15 7h1.5v1.25H18v1.5h-1.5V11H15zM6 8.25h8v1.5H6zm0 4h1.5V11H9v4H7.5v-1.25H6z"
      opacity={0.3}
    />
    <path d="M20 3H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h4v2h8v-2h4c1.1 0 2-.9 2-2V5a2 2 0 0 0-2-2m0 14H4V5h16z" />
    <path d="M6 8.25h8v1.5H6zM16.5 9.75H18v-1.5h-1.5V7H15v4h1.5zM10 12.25h8v1.5h-8zM7.5 15H9v-4H7.5v1.25H6v1.5h1.5z" />
  </svg>
);

export { SvgDisplaySettings };
