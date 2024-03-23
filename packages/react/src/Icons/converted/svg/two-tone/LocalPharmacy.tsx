import type { SVGProps } from "react";

const SvgLocalPharmacy = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M5.11 19h13.78l-1.79-5.37-.21-.63.21-.63L18.89 7H5.11l1.79 5.37.21.63-.21.63zM8 12h3V9h2v3h3v2h-3v3h-2v-3H8z"
      opacity={0.3}
    />
    <path d="M3 21h18v-2l-2-6 2-6V5h-2.64l1.14-3.14L17.15 1l-1.46 4H3v2l2 6-2 6zm3.9-8.63L5.11 7h13.78l-1.79 5.37-.21.63.21.63L18.89 19H5.11l1.79-5.37.21-.63zM11 17h2v-3h3v-2h-3V9h-2v3H8v2h3z" />
  </svg>
);

export { SvgLocalPharmacy };
