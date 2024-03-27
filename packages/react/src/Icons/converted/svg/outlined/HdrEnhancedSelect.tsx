import type { SVGProps } from "react";

const SvgHdrEnhancedSelect = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M12 2c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6 2.69-6 6-6m0 2C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4m1 7h-2V9H9V7h2V5h2v2h2v2h-2zm11 9h-2v2h-1.5v-2h-2v-1.5h2v-2H22v2h2zm-6-1.5c0 .6-.4 1.1-.9 1.4L18 22h-1.5l-.9-2h-1.1v2H13v-6h3.5c.8 0 1.5.7 1.5 1.5zm-1.5 0v-1h-2v1zm-13-.5v-2H5v6H3.5v-2.5h-2V22H0v-6h1.5v2zm6.5-2c.8 0 1.5.7 1.5 1.5v3c0 .8-.7 1.5-1.5 1.5H6.5v-6zm0 4.5v-3H8v3z" />
  </svg>
);

export { SvgHdrEnhancedSelect };