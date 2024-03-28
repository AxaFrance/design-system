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
    <path d="M19.63 9.78 16.56 19H7.44L4.37 9.78 12 4.44z" opacity={0.3} />
    <path d="M19.63 9.78 16.56 19H7.44L4.37 9.78 12 4.44zM2 9l4 12h12l4-12-10-7z" />
  </svg>
);

export { SvgPentagon };
