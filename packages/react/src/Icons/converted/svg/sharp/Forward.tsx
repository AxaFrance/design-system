import type { SVGProps } from "react";

const SvgForward = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M12 8V4l8 8-8 8v-4H4V8z" />
  </svg>
);

export { SvgForward };
