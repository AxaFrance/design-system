import type { SVGProps } from "react";

const SvgFileDownloadDone = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M20.13 5.41 18.72 4l-9.19 9.19-4.25-4.24-1.41 1.41 5.66 5.66zM5 18h14v2H5z" />
  </svg>
);

export { SvgFileDownloadDone };
