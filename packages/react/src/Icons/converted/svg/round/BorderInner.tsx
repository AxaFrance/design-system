import type { SVGProps } from "react";

const SvgBorderInner = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M3 21h2v-2H3zm4 0h2v-2H7zM5 7H3v2h2zM3 17h2v-2H3zM9 3H7v2h2zM5 3H3v2h2zm12 0h-2v2h2zm2 6h2V7h-2zm0-6v2h2V3zm-4 18h2v-2h-2zM12 3c-.55 0-1 .45-1 1v7H4c-.55 0-1 .45-1 1s.45 1 1 1h7v7c0 .55.45 1 1 1s1-.45 1-1v-7h7c.55 0 1-.45 1-1s-.45-1-1-1h-7V4c0-.55-.45-1-1-1m7 18h2v-2h-2zm0-4h2v-2h-2z" />
  </svg>
);

export { SvgBorderInner };
