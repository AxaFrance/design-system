import type { SVGProps } from "react";

const SvgHourglassTop = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="m8 7.5 4 4 4-4V4H8z" opacity={0.3} />
    <path d="m8 7.5 4 4 4-4V4H8z" opacity={0.3} />
    <path d="M18 2H6v6l4 4-3.99 4.01L6 22h12l-.01-5.99L14 12l4-3.99zm-2 14.5V20H8v-3.5l4-4zm0-9-4 4-4-4V4h8z" />
  </svg>
);

export { SvgHourglassTop };
