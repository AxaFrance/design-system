import type { SVGProps } from "react";

const SvgNearMeDisabled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="m12 6.34 6.95-2.58c.8-.3 1.58.48 1.29 1.29L17.66 12zm9.9 12.73L4.93 2.1a.996.996 0 1 0-1.41 1.41l4.36 4.36-4.2 1.56c-.41.16-.68.54-.68.97 0 .42.26.8.65.96l6.42 2.57 2.57 6.42c.16.39.54.65.96.65.43 0 .82-.27.97-.67l1.56-4.2 4.36 4.36c.39.39 1.02.39 1.41 0 .39-.4.39-1.03 0-1.42" />
  </svg>
);

export { SvgNearMeDisabled };
