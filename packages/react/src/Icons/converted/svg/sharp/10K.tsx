import type { SVGProps } from "react";

const Svg10K = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M10 10.5h1.5v3H10zM21 3H3v18h18zM7.5 15H6v-4.5H4.5V9h3zM13 9v6H8.5V9zm6 6h-1.75l-1.75-2.25V15H14V9h1.5v2.25L17.25 9H19l-2.25 3z" />
  </svg>
);

export { Svg10K };
