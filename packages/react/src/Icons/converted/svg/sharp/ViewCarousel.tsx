import type { SVGProps } from "react";

const SvgViewCarousel = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M2 7h4v10H2zm5 12h10V5H7zM18 7h4v10h-4z" />
  </svg>
);

export { SvgViewCarousel };
