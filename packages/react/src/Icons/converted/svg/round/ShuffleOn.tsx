import type { SVGProps } from "react";

const SvgShuffleOn = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M21 1H3c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2M4.3 4.7a.996.996 0 0 1 1.41 0l4.47 4.47-1.42 1.4L4.3 6.11a.996.996 0 0 1 0-1.41m15.29 14.8c0 .28-.22.5-.5.5H15.3a.5.5 0 0 1-.36-.85l1.2-1.2-3.13-3.13 1.41-1.41 3.13 3.14 1.19-1.19c.31-.32.85-.1.85.35zm0-11.21a.5.5 0 0 1-.85.36l-1.19-1.19L5.7 19.29a.996.996 0 1 1-1.41-1.41L16.13 6.04l-1.19-1.19A.5.5 0 0 1 15.3 4h3.79c.28 0 .5.22.5.5z" />
  </svg>
);

export { SvgShuffleOn };
