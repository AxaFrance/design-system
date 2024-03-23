import type { SVGProps } from "react";

const SvgQueueMusic = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M22 6h-5v8.18c-.31-.11-.65-.18-1-.18-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3V8h3zm-7 0H3v2h12zm0 4H3v2h12zm-4 4H3v2h8z" />
  </svg>
);

export { SvgQueueMusic };
