import type { SVGProps } from "react";

const SvgDoNotStep = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="m1.39 4.22 8.24 8.24-.69.72-2.07-2.08c-.11.4-.26.78-.45 1.12l1.75 1.75-.69.72-1.63-1.63c-.24.29-.5.56-.77.8l1.63 1.63-.7.72-1.74-1.74c-1.44.96-2.93 1.35-3.27 1.45V20h9.5l3.33-3.33 5.94 5.94 1.41-1.41L2.81 2.81zm17.12 11.46-1.41-1.41 4.48-4.48L23 11.2zm2.37-6.6-4.48 4.48-7.1-7.09L13.8 2z" />
  </svg>
);

export { SvgDoNotStep };
