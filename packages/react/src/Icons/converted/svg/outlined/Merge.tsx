import type { SVGProps } from "react";

const SvgMerge = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M6.41 21 5 19.59l4.83-4.83c.75-.75 1.17-1.77 1.17-2.83v-5.1L9.41 8.41 8 7l4-4 4 4-1.41 1.41L13 6.83v5.1c0 1.06.42 2.08 1.17 2.83L19 19.59 17.59 21 12 15.41z" />
  </svg>
);

export { SvgMerge };
