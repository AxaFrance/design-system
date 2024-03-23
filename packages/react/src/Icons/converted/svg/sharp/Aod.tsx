import type { SVGProps } from "react";

const SvgAod = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M19 1H5v22h14zm-2 17H7V6h10zm-9-8h8v1.5H8zm1 3h6v1.5H9z" />
  </svg>
);

export { SvgAod };
