import type { SVGProps } from "react";

const SvgSwitchCamera = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M22 4h-5.17L15 2H9L7.17 4H2v16h20zm-7 11.5V13H9v2.5L5.5 12 9 8.5V11h6V8.5l3.5 3.5z" />
  </svg>
);

export { SvgSwitchCamera };
