import type { SVGProps } from "react";

const SvgBrowseGallery = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M9 3a9 9 0 1 0 .001 18.001A9 9 0 0 0 9 3m0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7" />
    <path d="M10 7H8v5.41l3.79 3.8 1.42-1.42-3.21-3.2zM17.99 3.52v2.16A6.99 6.99 0 0 1 22 12c0 2.79-1.64 5.2-4.01 6.32v2.16C21.48 19.24 24 15.91 24 12s-2.52-7.24-6.01-8.48" />
  </svg>
);

export { SvgBrowseGallery };
