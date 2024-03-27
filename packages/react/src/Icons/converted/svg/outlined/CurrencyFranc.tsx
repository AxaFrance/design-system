import type { SVGProps } from "react";

const SvgCurrencyFranc = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M18 5V3H7v13H5v2h2v3h2v-3h4v-2H9v-3h8v-2H9V5z" />
  </svg>
);

export { SvgCurrencyFranc };
