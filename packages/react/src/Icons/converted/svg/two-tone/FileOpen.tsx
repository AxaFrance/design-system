import type { SVGProps } from "react";

const SvgFileOpen = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M15 14h3V9h-5V4H6v16h9z" opacity={0.3} />
    <path d="M15 22H6c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h8l6 6v6h-2V9h-5V4H6v16h9zm4-.34v-2.24l2.95 2.95 1.41-1.41L20.41 18h2.24v-2H17v5.66z" />
  </svg>
);

export { SvgFileOpen };
