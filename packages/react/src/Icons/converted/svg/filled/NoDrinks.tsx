import type { SVGProps } from "react";

const SvgNoDrinks = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M5.83 3H21v2l-6.2 6.97L9.83 7h6.74l1.78-2H7.83zm13.95 19.61L18 20.83V21H6v-2h5v-5l-1.37-1.54-8.24-8.24L2.8 2.81 3 3l18.19 18.19zM16.17 19 13 15.83V19z" />
  </svg>
);

export { SvgNoDrinks };
