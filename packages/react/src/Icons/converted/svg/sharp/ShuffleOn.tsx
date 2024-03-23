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
    <path d="M1 1v22h22V1zm4.41 3 5.18 5.17-1.42 1.41L4 5.41zM20 20h-5.5l2.05-2.05-3.13-3.13 1.41-1.41 3.13 3.13L20 14.5zm0-10.5-2.04-2.04L5.41 20 4 18.59 16.54 6.04 14.5 4H20z" />
  </svg>
);

export { SvgShuffleOn };
