import type { SVGProps } from "react";

const SvgClearAll = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M5 11h14v2H5zm-2 4h14v2H3zm4-8h14v2H7z" />
  </svg>
);

export { SvgClearAll };
