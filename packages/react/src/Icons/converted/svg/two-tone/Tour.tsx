import type { SVGProps } from "react";

const SvgTour = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M7 12V6h11.05l-1.2 3 1.2 3z" opacity={0.3} />
    <path d="M21 4H7V2H5v20h2v-8h14l-2-5zM7 12V6h11.05l-1.2 3 1.2 3zm7-3c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2" />
  </svg>
);

export { SvgTour };
