import type { SVGProps } from "react";

const SvgEdgesensorLow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M8 4h8v1H8zM8 19h8v1H8z" opacity={0.3} />
    <path d="M20 10h2v7h-2zM2 7h2v7H2zM16 2.01 8 2c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V4c0-1.1-.9-1.99-2-1.99M16 20H8v-1h8zm0-3H8V7h8zm0-12H8V4h8z" />
  </svg>
);

export { SvgEdgesensorLow };
