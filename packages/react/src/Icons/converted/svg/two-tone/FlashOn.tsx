import type { SVGProps } from "react";

const SvgFlashOn = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M17 10h-4l3-8H7v11h3v9z" />
  </svg>
);

export { SvgFlashOn };
