import type { SVGProps } from "react";

const SvgRemoveRoad = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M18 4h2v9h-2zM4 4h2v16H4zM11 4h2v4h-2zM11 10h2v4h-2zM11 16h2v4h-2zM22.5 16.41 21.09 15 19 17.09 16.91 15l-1.41 1.41 2.09 2.09-2.09 2.09L16.91 22 19 19.91 21.09 22l1.41-1.41-2.09-2.09z" />
  </svg>
);

export { SvgRemoveRoad };
