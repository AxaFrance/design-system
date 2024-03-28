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
    <path d="M22 2H2v20l4-4h9v-8h7z" />
    <path d="M22.5 16h-2.2l1.7-4h-5v6h2v5z" />
  </svg>
);

export { SvgQuickreply };
