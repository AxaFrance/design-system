import type { SVGProps } from "react";

const SvgTabletAndroid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0zm0 0h24v24H0z" />
    <path d="M21 0H3v24h18zm-7 22h-4v-1h4zm5.25-3H4.75V3h14.5z" />
  </svg>
);

export { SvgTabletAndroid };
