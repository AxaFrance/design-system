import type { SVGProps } from "react";

const SvgPark = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M13.26 10h1.9l-3.15-4.5L8.88 10h1.81l-3.9 6h10.47z"
      opacity={0.3}
    />
    <path d="M17 12h2L12 2 5.05 12H7l-3.9 6h6.92v4h3.95v-4H21zM6.79 16l3.9-6H8.88l3.13-4.5 3.15 4.5h-1.9l4 6z" />
  </svg>
);

export { SvgPark };
