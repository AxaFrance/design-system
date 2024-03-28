import type { SVGProps } from "react";

const SvgNote = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="m22 10-6-6H2v16h20zm-7-4.5 5.5 5.5H15z" />
  </svg>
);

export { SvgNote };
