import type { SVGProps } from "react";

const SvgCurtainsClosed = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M6 5h3v14H6zM15 5h3v14h-3z" opacity={0.3} />
    <path d="M20 19V3H4v16H2v2h20v-2zM9 19H6V5h3zm4 0h-2V5h2zm5 0h-3V5h3z" />
  </svg>
);

export { SvgCurtainsClosed };
