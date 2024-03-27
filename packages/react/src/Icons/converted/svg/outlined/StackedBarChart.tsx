import type { SVGProps } from "react";

const SvgStackedBarChart = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M4 9h4v11H4zM4 4h4v4H4zM10 7h4v4h-4zM16 10h4v4h-4zM16 15h4v5h-4zM10 12h4v8h-4z" />
  </svg>
);

export { SvgStackedBarChart };
