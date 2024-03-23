import type { SVGProps } from "react";

const SvgAtm = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M8 9v1.5h2.25V15h1.5v-4.5H14V9zM7 9H2v6h1.5v-1.5h2V15H7zm-1.5 3h-2v-1.5h2zM22 9h-6.5v6H17v-4.5h1V14h1.5v-3.51h1V15H22z" />
  </svg>
);

export { SvgAtm };
