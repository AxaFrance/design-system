import type { SVGProps } from "react";

const SvgCompress = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M8 19h3v3h2v-3h3l-4-4zm8-15h-3V1h-2v3H8l4 4zM4 9v2h16V9zM4 12h16v2H4z" />
  </svg>
);

export { SvgCompress };
