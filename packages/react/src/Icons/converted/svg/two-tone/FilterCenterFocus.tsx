import type { SVGProps } from "react";

const SvgFilterCenterFocus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M5 5h4V3H5c-1.1 0-2 .9-2 2v4h2zm7 4c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3m7-6h-4v2h4v4h2V5c0-1.1-.9-2-2-2m0 16h-4v2h4c1.1 0 2-.9 2-2v-4h-2zM5 15H3v4c0 1.1.9 2 2 2h4v-2H5z" />
  </svg>
);

export { SvgFilterCenterFocus };
