import type { SVGProps } from "react";

const SvgDoDisturbOff = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M17 11v2h-.88l4.33 4.33A9.9 9.9 0 0 0 22 12c0-5.52-4.48-10-10-10a9.9 9.9 0 0 0-5.33 1.55L14.12 11zM2.41 2.13 1 3.54l2.78 2.78A9.9 9.9 0 0 0 2 12c0 5.52 4.48 10 10 10 2.11 0 4.07-.66 5.68-1.78L20.46 23l1.41-1.41zM7 13v-2h1.46l2 2z" />
  </svg>
);

export { SvgDoDisturbOff };
