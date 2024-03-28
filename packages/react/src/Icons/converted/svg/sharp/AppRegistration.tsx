import type { SVGProps } from "react";

const SvgAppRegistration = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M10 4h4v4h-4zM4 16h4v4H4zM4 10h4v4H4zM4 4h4v4H4zM16 4h4v4h-4zM11 17.86V20h2.1l5.98-5.97-2.12-2.12zM14 12.03V10h-4v4h2.03zM17.671 11.206l1.415-1.414 2.12 2.12-1.413 1.415z" />
  </svg>
);

export { SvgAppRegistration };
