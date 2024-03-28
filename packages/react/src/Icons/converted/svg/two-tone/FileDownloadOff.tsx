import type { SVGProps } from "react";

const SvgFileDownloadOff = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M13 5h-2v3.17l2 2z" opacity={0.3} />
    <path d="m11 8.17-2-2V3h6v6h4l-3.59 3.59L13 10.17V5h-2zm10.19 13.02L2.81 2.81 1.39 4.22 6.17 9H5l7 7 .59-.59L15.17 18H5v2h12.17l2.61 2.61z" />
  </svg>
);

export { SvgFileDownloadOff };
