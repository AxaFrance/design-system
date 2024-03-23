import type { SVGProps } from "react";

const SvgVerticalShades = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M6 5h2v14H6zM16 5h2v14h-2z" opacity={0.3} />
    <path d="M20 19V3H4v16H2v2h20v-2zM8 19H6V5h2zm6 0h-4V5h4zm4 0h-2V5h2z" />
  </svg>
);

export { SvgVerticalShades };
