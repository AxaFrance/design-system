import type { SVGProps } from "react";

const SvgAirportShuttle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M17 5H3a2 2 0 0 0-2 2v9h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5zm-2 2h1l3 3h-4zM9 7h4v3H9zM3 7h4v3H3zm3 10.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5m12 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5M21 14h-.78c-.55-.61-1.34-1-2.22-1s-1.67.39-2.22 1H8.22c-.55-.61-1.33-1-2.22-1s-1.67.39-2.22 1H3v-2h18z" />
  </svg>
);

export { SvgAirportShuttle };
