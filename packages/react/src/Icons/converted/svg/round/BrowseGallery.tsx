import type { SVGProps } from "react";

const SvgBrowseGallery = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <g fill="none">
      <path d="M0 0h24v24H0z" />
      <path d="M0 0h24v24H0z" />
    </g>
    <path d="M9 3a9 9 0 1 0 .001 18.001A9 9 0 0 0 9 3m2.09 12.5L8.59 13c-.38-.38-.59-.88-.59-1.41V8c0-.55.45-1 1-1s1 .45 1 1v3.59l2.5 2.5a.996.996 0 1 1-1.41 1.41" />
    <path d="M17.99 5.08c0 .37.21.69.53.88a6.98 6.98 0 0 1 0 12.08c-.32.19-.53.51-.53.88 0 .77.84 1.25 1.51.86C22.18 18.22 24 15.32 24 12s-1.82-6.22-4.5-7.78c-.67-.39-1.51.09-1.51.86" />
  </svg>
);

export { SvgBrowseGallery };
