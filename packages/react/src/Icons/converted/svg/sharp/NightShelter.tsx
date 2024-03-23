import type { SVGProps } from "react";

const SvgNightShelter = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M12 3 4 9v12h16V9zm-2.25 9.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M17 18h-1v-1.5H8V18H7v-7h1v4.5h3.5V12H17z" />
  </svg>
);

export { SvgNightShelter };
