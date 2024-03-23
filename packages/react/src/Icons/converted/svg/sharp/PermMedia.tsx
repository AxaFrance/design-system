import type { SVGProps } from "react";

const SvgPermMedia = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M2 6H0v16h20v-2H2zm22-2H14l-2-2H4v16h20zM7 15l4.5-6 3.5 4.51 2.5-3.01L21 15z" />
  </svg>
);

export { SvgPermMedia };
