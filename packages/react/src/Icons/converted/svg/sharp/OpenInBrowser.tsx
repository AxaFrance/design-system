import type { SVGProps } from "react";

const SvgOpenInBrowser = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M3 4v16h6v-2H5V8h14v10h-4v2h6V4zm9 6-4 4h3v6h2v-6h3z" />
  </svg>
);

export { SvgOpenInBrowser };
