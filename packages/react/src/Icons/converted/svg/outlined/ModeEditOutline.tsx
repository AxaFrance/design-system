import type { SVGProps } from "react";

const SvgModeEditOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M3 21h3.75L17.81 9.94l-3.75-3.75L3 17.25zm2-2.92 9.06-9.06.92.92L5.92 19H5zM18.37 3.29a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83a.996.996 0 0 0 0-1.41z" />
  </svg>
);

export { SvgModeEditOutline };
