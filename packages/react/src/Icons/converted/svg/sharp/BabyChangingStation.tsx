import type { SVGProps } from "react";

const SvgBabyChangingStation = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M14 8v2h-3L8.31 8.82 7 12.75V22H3V12l1.58-4.63A2 2 0 0 1 6.46 6c.28 0 .56.05.84.18l4.15 1.83zM8 1c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m1 18h12v-2H9zm10.5-3c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5M13 13v-2H9v2h2v3h6v-5h-2v2z" />
  </svg>
);

export { SvgBabyChangingStation };
