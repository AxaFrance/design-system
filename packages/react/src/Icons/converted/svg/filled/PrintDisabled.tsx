import type { SVGProps } from "react";

const SvgPrintDisabled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M19.1 17H22v-6c0-1.7-1.3-3-3-3h-9zm-.1-7c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1m-1-3V3H6v1.1L9 7zM1.2 1.8 0 3l4.9 5C3.3 8.1 2 9.4 2 11v6h4v4h11.9l3 3 1.3-1.3zM8 19v-5h2.9l5 5z" />
  </svg>
);

export { SvgPrintDisabled };
