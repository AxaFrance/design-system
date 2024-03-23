import type { SVGProps } from "react";

const SvgKeyboardHide = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M22 3H2.01L2 17h20zM11 6h2v2h-2zm0 3h2v2h-2zM8 6h2v2H8zm0 3h2v2H8zm-1 2H5V9h2zm0-3H5V6h2zm9 7H8v-2h8zm0-4h-2V9h2zm0-3h-2V6h2zm3 3h-2V9h2zm0-3h-2V6h2zm-7 15 4-4H8z" />
  </svg>
);

export { SvgKeyboardHide };
