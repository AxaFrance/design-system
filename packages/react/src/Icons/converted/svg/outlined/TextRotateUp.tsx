import type { SVGProps } from "react";

const SvgTextRotateUp = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0zm0 0h24v24H0zm0 0h24v24H0z" />
    <path d="m18 4-3 3h2v13h2V7h2zm-6.2 11.5v-5l2.2-.9V7.5L3 12.25v1.5l11 4.75v-2.1zM4.98 13 10 11.13v3.74z" />
  </svg>
);

export { SvgTextRotateUp };
