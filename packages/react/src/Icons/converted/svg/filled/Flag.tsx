import type { SVGProps } from "react";

const SvgFlag = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M14.4 6 14 4H5v17h2v-7h5.6l.4 2h7V6z" />
  </svg>
);

export { SvgFlag };
