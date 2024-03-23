import type { SVGProps } from "react";

const SvgDownload = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M13 9V5h-2v6H9.83L12 13.17 14.17 11H13z" opacity={0.3} />
    <path d="M15 9V3H9v6H5l7 7 7-7zm-3 4.17L9.83 11H11V5h2v6h1.17zM5 18h14v2H5z" />
  </svg>
);

export { SvgDownload };
