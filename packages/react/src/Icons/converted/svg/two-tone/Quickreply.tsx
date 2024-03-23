import type { SVGProps } from "react";

const SvgQuickreply = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M4 4v13.17L5.17 16H15v-6h5V4z" opacity={0.3} />
    <path d="M5.17 16 4 17.17V4h16v6h2V4c0-1.1-.9-2-2-2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h9v-2z" />
    <path d="m19 23 3.5-7h-2.2l1.7-4h-5v6h2z" />
  </svg>
);

export { SvgQuickreply };
