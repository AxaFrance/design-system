import type { SVGProps } from "react";

const SvgPageview = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M11.5 9a2.5 2.5 0 0 0 0 5 2.5 2.5 0 0 0 0-5M22 4H2v16h20zm-5.21 14.21-2.91-2.91c-.69.44-1.51.7-2.39.7C9.01 16 7 13.99 7 11.5S9.01 7 11.5 7 16 9.01 16 11.5c0 .88-.26 1.69-.7 2.39l2.91 2.9z" />
  </svg>
);

export { SvgPageview };
