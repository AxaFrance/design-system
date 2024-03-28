import type { SVGProps } from "react";

const SvgMuseum = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M22 11V9L12 2 2 9v2h2v9H2v2h20v-2h-2v-9zm-6 7h-2v-4l-2 3-2-3v4H8v-7h2l2 3 2-3h2z" />
  </svg>
);

export { SvgMuseum };
