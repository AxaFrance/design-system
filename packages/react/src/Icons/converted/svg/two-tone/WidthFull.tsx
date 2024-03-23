import type { SVGProps } from "react";

const SvgWidthFull = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M7 6h10v12H7z" opacity={0.3} />
    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2M5 18H4V6h1zm12 0H7V6h10zm3 0h-1V6h1z" />
  </svg>
);

export { SvgWidthFull };
