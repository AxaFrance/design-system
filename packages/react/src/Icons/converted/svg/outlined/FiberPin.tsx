import type { SVGProps } from "react";

const SvgFiberPin = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M11 15h1.5V9H11zm7.75-6v3.5L16.25 9H15v6h1.25v-3.5L18.8 15H20V9zM7.5 9H4v6h1.5v-2h2c.85 0 1.5-.65 1.5-1.5v-1C9 9.65 8.35 9 7.5 9m0 2.5h-2v-1h2z" />
  </svg>
);

export { SvgFiberPin };
