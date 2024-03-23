import type { SVGProps } from "react";

const SvgAutoAwesomeMotion = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M14 2H2v12h2V4h10zm4 4H6v12h2V8h10zm4 4H10v12h12z" />
  </svg>
);

export { SvgAutoAwesomeMotion };
