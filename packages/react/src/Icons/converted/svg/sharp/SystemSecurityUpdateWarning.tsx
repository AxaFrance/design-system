import type { SVGProps } from "react";

const SvgSystemSecurityUpdateWarning = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M11 15h2v2h-2zM11 7h2v6h-2z" />
    <path d="M5.01 1v22H19V1zM17 18H7V6h10z" />
  </svg>
);

export { SvgSystemSecurityUpdateWarning };
