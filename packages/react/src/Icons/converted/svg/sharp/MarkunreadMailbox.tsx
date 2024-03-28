import type { SVGProps } from "react";

const SvgMarkunreadMailbox = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M22 6H10v6H8V4h6V0H6v6H2v16h20z" />
  </svg>
);

export { SvgMarkunreadMailbox };
