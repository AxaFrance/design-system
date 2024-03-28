import type { SVGProps } from "react";

const SvgFlare = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M7 11H1v2h6zm2.17-3.24L7.05 5.64 5.64 7.05l2.12 2.12zM13 1h-2v6h2zm5.36 6.05-1.41-1.41-2.12 2.12 1.41 1.41zM17 11v2h6v-2zm-5-2c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3m2.83 7.24 2.12 2.12 1.41-1.41-2.12-2.12zm-9.19.71 1.41 1.41 2.12-2.12-1.41-1.41zM11 23h2v-6h-2z" />
  </svg>
);

export { SvgFlare };
