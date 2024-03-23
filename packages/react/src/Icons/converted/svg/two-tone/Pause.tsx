import type { SVGProps } from "react";

const SvgPause = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M6 5h4v14H6zm8 0h4v14h-4z" />
  </svg>
);

export { SvgPause };
