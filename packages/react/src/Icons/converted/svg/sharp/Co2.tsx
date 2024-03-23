import type { SVGProps } from "react";

const SvgCo2 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M15 9h-5v6h5zm-1.5 4.5h-2v-3h2zM8 13v2H3V9h5v2H6.5v-.5h-2v3h2V13zm10.5 2.5v1h3V18H17v-3.5h3v-1h-3V12h4.5v3.5z" />
  </svg>
);

export { SvgCo2 };
