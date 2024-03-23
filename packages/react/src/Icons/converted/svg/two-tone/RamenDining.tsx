import type { SVGProps } from "react";

const SvgRamenDining = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="m8.73 18.39 1.27.5V20h4v-1.11l1.27-.5c2.16-.85 3.74-2.47 4.4-4.39H4.34c.65 1.92 2.24 3.54 4.39 4.39"
      opacity={0.3}
    />
    <path d="M22 3.51V2L4 3.99V12H2c0 3.69 2.47 6.86 6 8.25V22h8v-1.75c3.53-1.39 6-4.56 6-8.25H10.5V8H22V6.5H10.5V4.78zM8 5.06l1-.11V6.5H8zM8 8h1v4H8zM5.5 5.34l1-.11V6.5h-1zM5.5 8h1v4h-1zm14.16 6c-.66 1.92-2.24 3.54-4.4 4.39l-1.26.5V20h-4v-1.11l-1.27-.5c-2.16-.85-3.74-2.47-4.4-4.39z" />
  </svg>
);

export { SvgRamenDining };
