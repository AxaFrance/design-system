import type { SVGProps } from "react";

const SvgVideoCameraBack = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M18 10.48V4H2v16h16v-6.48l4 3.98v-11zM5 16l2.38-3.17L9 15l2.62-3.5L15 16z" />
  </svg>
);

export { SvgVideoCameraBack };
