import type { SVGProps } from "react";

const SvgDriveFileMove = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M22 6H12l-2-2H2v16h20zM12 17v-3H8v-2h4V9l4 4z" />
  </svg>
);

export { SvgDriveFileMove };
