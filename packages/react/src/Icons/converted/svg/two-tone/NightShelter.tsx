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
    <path
      d="m12 5.5 6 4.5v9H6v-9zm3 6.5h-3.5v3.5H8V11H7v7h1v-1.5h8V18h1v-4c0-1.1-.9-2-2-2m-5.25.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5"
      opacity={0.3}
    />
    <path d="m12 5.5 6 4.5v9H6v-9zM12 3 4 9v12h16V9zm3 9h-3.5v3.5H8V11H7v7h1v-1.5h8V18h1v-4c0-1.1-.9-2-2-2m-5.25.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5" />
  </svg>
);

export { SvgNightShelter };
