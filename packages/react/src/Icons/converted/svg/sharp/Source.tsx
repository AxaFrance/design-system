import type { SVGProps } from "react";

const SvgSource = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="m12 6-2-2H2v16h20V6zm2 10H6v-2h8zm4-4H6v-2h12z" />
  </svg>
);

export { SvgSource };
