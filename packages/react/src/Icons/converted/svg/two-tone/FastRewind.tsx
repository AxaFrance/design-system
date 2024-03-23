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
    <path d="M9 14.14V9.86L5.97 12zm9 0V9.86L14.97 12z" opacity={0.3} />
    <path d="m11 6-8.5 6 8.5 6zm-2 8.14L5.97 12 9 9.86zM20 6l-8.5 6 8.5 6zm-2 8.14L14.97 12 18 9.86z" />
  </svg>
);

export { SvgFastRewind };
