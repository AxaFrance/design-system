import type { SVGProps } from "react";

const SvgCreditCardOff = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M6.83 4H22v15.17L14.83 12H20V8h-9.17zm13.66 19.31L17.17 20H2V4.83L.69 3.51 2.1 2.1l19.8 19.8zM9.17 12l-4-4H4v4z" />
  </svg>
);

export { SvgCreditCardOff };
