import type { SVGProps } from "react";

const SvgCategory = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="m12 2-5.5 9h11z" />
    <circle cx={17.5} cy={17.5} r={4.5} />
    <path d="M3 13.5h8v8H3z" />
  </svg>
);

export { SvgCategory };
