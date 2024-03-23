import type { SVGProps } from "react";

const SvgFileCopy = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M16 1H2v16h2V3h12zm-1 4 6 6v12H6V5zm-1 7h5.5L14 6.5z" />
  </svg>
);

export { SvgFileCopy };
