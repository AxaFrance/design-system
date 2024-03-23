import type { SVGProps } from "react";

const SvgTableBar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M22 7.5C22 5.57 17.52 4 12 4S2 5.57 2 7.5c0 1.81 3.95 3.31 9 3.48V15H8l-2 5h2l1.2-3h5.6l1.2 3h2l-2-5h-3v-4.02c5.05-.17 9-1.67 9-3.48" />
  </svg>
);

export { SvgTableBar };
