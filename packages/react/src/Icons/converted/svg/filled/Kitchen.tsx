import type { SVGProps } from "react";

const SvgKitchen = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M20 9V4c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v5zM8 5h2v3H8zm-4 6v9c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-9zm6 6H8v-5h2z" />
  </svg>
);

export { SvgKitchen };
