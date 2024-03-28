import type { SVGProps } from "react";

const SvgIceSkating = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M21 17c0 1.66-1.34 3-3 3h-2v-2h3l-.01-6-5.71-1.43A3 3 0 0 1 11.32 9H8V8h3.02L11 7H8V6h3V3H3v15h3v2H2v2h16c2.76 0 5-2.24 5-5zm-7 3H8v-2h6z" />
  </svg>
);

export { SvgIceSkating };
