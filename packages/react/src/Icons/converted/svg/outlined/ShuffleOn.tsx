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
    <path d="M21 1H3c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2M5.41 4l5.18 5.17-1.41 1.42L4 5.42zM20 20h-6v-2h2.61l-3.2-3.2 1.42-1.42 3.13 3.13.04.04V14h2zm0-10h-2V7.42L5.41 20 4 18.59 16.58 6H14V4h6z" />
  </svg>
);

export { SvgShuffleOn };
