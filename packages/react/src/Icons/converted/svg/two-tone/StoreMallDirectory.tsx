import type { SVGProps } from "react";

const SvgStoreMallDirectory = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="m5.64 9-.6 3h13.92l-.6-3z" opacity={0.3} />
    <path d="m4 7-1 5v2h1v6h10v-6h4v6h2v-6h1v-2l-1-5zm8 11H6v-4h6zm-6.96-6 .6-3h12.72l.6 3zM4 4h16v2H4z" />
  </svg>
);

export { SvgStoreMallDirectory };
