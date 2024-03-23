import type { SVGProps } from "react";

const SvgCrop = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M17 15h2V5H9v2h8zM7 17V1H5v4H1v2h4v12h12v4h2v-4h4v-2z" />
  </svg>
);

export { SvgCrop };
