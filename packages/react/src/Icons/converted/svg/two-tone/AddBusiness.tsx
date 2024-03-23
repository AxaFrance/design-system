import type { SVGProps } from "react";

const SvgAddBusiness = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M15.36 9H3.64l-.6 3h12.92z" opacity={0.3} />
    <path d="M2 4h15v2H2zM15 17h2v-3h1v-2l-1-5H2l-1 5v2h1v6h9v-6h4zm-6 1H4v-4h5zm-5.96-6 .6-3h11.72l.6 3z" />
    <path d="M20 18v-3h-2v3h-3v2h3v3h2v-3h3v-2z" />
  </svg>
);

export { SvgAddBusiness };
