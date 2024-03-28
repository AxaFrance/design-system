import type { SVGProps } from "react";

const SvgFormatPaint = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M18 4V2H4v6h14V6h1v4H9v12h4V12h8V4z" />
  </svg>
);

export { SvgFormatPaint };
