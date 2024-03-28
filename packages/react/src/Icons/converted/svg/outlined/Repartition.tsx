import type { SVGProps } from "react";

const SvgRepartition = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M3 21h18v-6H3zm7.33-2v-2h3.33v2zM19 19h-3.33v-2H19zM5 17h3.33v2H5zM6 10l1.42-1.42L5.83 7H17c1.1 0 2 .9 2 2s-.9 2-2 2H3v2h14c2.21 0 4-1.79 4-4s-1.79-4-4-4H5.83l1.59-1.59L6 2 2 6z" />
  </svg>
);

export { SvgRepartition };
