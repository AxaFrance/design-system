import type { SVGProps } from "react";

const SvgContentCopy = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M16 1H2v16h2V3h12zm5 4H6v18h15zm-2 16H8V7h11z" />
  </svg>
);

export { SvgContentCopy };
