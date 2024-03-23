import type { SVGProps } from "react";

const SvgSimCardDownload = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M20 2H10L4 8v14h16zm-8 15-4-4h3V9.02L13 9v4h3z" />
  </svg>
);

export { SvgSimCardDownload };
