import type { SVGProps } from "react";

const SvgKeyboardControlKey = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="m5 12 1.41 1.41L12 7.83l5.59 5.58L19 12l-7-7z" />
  </svg>
);

export { SvgKeyboardControlKey };
