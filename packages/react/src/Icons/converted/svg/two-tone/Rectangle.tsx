import type { SVGProps } from "react";

const SvgRectangle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M4 6h16v12H4z" opacity={0.3} />
    <path d="M2 4v16h20V4zm18 14H4V6h16z" />
  </svg>
);

export { SvgRectangle };
