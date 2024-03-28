import type { SVGProps } from "react";

const SvgModeComment = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M22 2H2v16h16l4 4z" />
  </svg>
);

export { SvgModeComment };
