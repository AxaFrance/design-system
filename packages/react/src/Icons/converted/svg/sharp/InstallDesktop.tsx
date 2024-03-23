import type { SVGProps } from "react";

const SvgInstallDesktop = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M20 17H4V5h8V3H2v16h6v2h8v-2h6v-5h-2z" />
    <path d="m17 14 5-5-1.41-1.41L18 10.17V3h-2v7.17l-2.59-2.58L12 9z" />
  </svg>
);

export { SvgInstallDesktop };
