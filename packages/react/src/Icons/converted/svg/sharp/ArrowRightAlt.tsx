import type { SVGProps } from "react";

const SvgArrowRightAlt = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4z" />
  </svg>
);

export { SvgArrowRightAlt };
