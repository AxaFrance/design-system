import type { SVGProps } from "react";

const SvgBarChart = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M4 9h4v11H4zM16 13h4v7h-4zM10 4h4v16h-4z" />
  </svg>
);

export { SvgBarChart };
