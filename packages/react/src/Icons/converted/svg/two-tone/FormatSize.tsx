import type { SVGProps } from "react";

const SvgFormatSize = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M3 12h3v7h3v-7h3V9H3zm6-5h5v12h3V7h5V4H9z" />
  </svg>
);

export { SvgFormatSize };
