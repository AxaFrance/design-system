import type { SVGProps } from "react";

const SvgFastRewind = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M18 9.86v4.28L14.97 12zm-9 0v4.28L5.97 12zM20 6l-8.5 6 8.5 6zm-9 0-8.5 6 8.5 6z" />
  </svg>
);

export { SvgFastRewind };
