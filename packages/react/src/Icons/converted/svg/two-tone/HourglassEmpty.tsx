import type { SVGProps } from "react";

const SvgHourglassEmpty = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M18 2H6v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18zm-2 14.5V20H8v-3.5l4-4zm0-9-4 4-4-4V4h8z" />
  </svg>
);

export { SvgHourglassEmpty };
