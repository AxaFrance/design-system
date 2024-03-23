import type { SVGProps } from "react";

const SvgSportsGymnastics = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M4 6c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2M1 9h6l7-5 1.31 1.52-4.17 2.98H14L21.8 4 23 5.4 14.5 12 14 22h-2l-.5-10L8 11H1z" />
  </svg>
);

export { SvgSportsGymnastics };
