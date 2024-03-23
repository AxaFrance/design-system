import type { SVGProps } from "react";

const SvgExposurePlus1 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0zm0 0h24v24H0z" />
    <path d="M10 7H8v4H4v2h4v4h2v-4h4v-2h-4zm10 11h-2V7.38L15 8.4V6.7L19.7 5h.3z" />
  </svg>
);

export { SvgExposurePlus1 };
