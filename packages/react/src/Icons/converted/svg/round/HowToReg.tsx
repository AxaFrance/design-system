import type { SVGProps } from "react";

const SvgHowToReg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="m12 20-.86-.86a2.997 2.997 0 0 1 .02-4.26l.84-.82a9 9 0 0 0-1-.06c-2.67 0-8 1.34-8 4v2zm-1-8c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4M16.18 19.78c-.39.39-1.03.39-1.42 0l-2.07-2.09a.99.99 0 0 1 0-1.39l.01-.01a.984.984 0 0 1 1.4 0l1.37 1.37 4.43-4.46a.996.996 0 0 1 1.41 0l.01.01a.99.99 0 0 1 0 1.39z" />
  </svg>
);

export { SvgHowToReg };
