import type { SVGProps } from "react";

const SvgStraighten = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M23 6H1v12h22zm-2 10H3V8h2v4h2V8h2v4h2V8h2v4h2V8h2v4h2V8h2z" />
  </svg>
);

export { SvgStraighten };
