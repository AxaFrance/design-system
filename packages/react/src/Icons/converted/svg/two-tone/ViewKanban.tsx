import type { SVGProps } from "react";

const SvgViewKanban = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M5 19h14V5H5zM15 7h2v8h-2zm-4 0h2v5h-2zM7 7h2v10H7z"
      opacity={0.3}
    />
    <path d="M7 7h2v10H7zM11 7h2v5h-2zM15 7h2v8h-2z" />
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V5h14z" />
  </svg>
);

export { SvgViewKanban };
