import type { SVGProps } from "react";

const SvgModeOfTravel = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M15.31 18.9c-.96 1-2.06 2.03-3.31 3.1-5.33-4.55-8-8.48-8-11.8C4 5.22 7.8 2 12 2c4.19 0 7.99 3.21 8 8.17l2.09-2.09L23.5 9.5 19 14l-4.5-4.5 1.41-1.41L18 10.17C17.99 6.55 15.34 4 12 4c-3.35 0-6 2.57-6 6.2 0 2.34 1.95 5.44 6 9.14q.96-.885 1.77-1.71a2.5 2.5 0 0 1-.27-1.12 2.5 2.5 0 0 1 5 0 2.492 2.492 0 0 1-3.19 2.39" />
  </svg>
);

export { SvgModeOfTravel };
