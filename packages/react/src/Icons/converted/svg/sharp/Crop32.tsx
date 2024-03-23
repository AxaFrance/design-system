import type { SVGProps } from "react";

const SvgCrop32 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M21 6H3v12h18zm-2 10H5V8h14z" />
  </svg>
);

export { SvgCrop32 };
