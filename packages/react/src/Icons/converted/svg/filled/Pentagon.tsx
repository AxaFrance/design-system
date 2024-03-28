import type { SVGProps } from "react";

const SvgPentagon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="m2 9 4 12h12l4-12-10-7z" />
  </svg>
);

export { SvgPentagon };
