import type { SVGProps } from "react";

const SvgLocalConvenienceStore = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M19 7V4H5v3H2v13h8v-4h4v4h8V7zm-8 3H9v1h2v1H8V9h2V8H8V7h3zm5 2h-1v-2h-2V7h1v2h1V7h1z" />
  </svg>
);

export { SvgLocalConvenienceStore };
