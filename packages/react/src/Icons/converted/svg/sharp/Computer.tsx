import type { SVGProps } from "react";

const SvgComputer = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="m20 18 2-2V4H2v12l2 2H0v2h24v-2zM4 6h16v10H4z" />
  </svg>
);

export { SvgComputer };
