import type { SVGProps } from "react";

const SvgPersonAddDisabled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M15 6c1.1 0 2 .9 2 2a2 2 0 0 1-1.67 1.97l-2.31-2.31C13.19 6.72 14.01 6 15 6m0-2c-2.21 0-4 1.79-4 4 0 .18.03.35.05.52l3.43 3.43c.17.02.34.05.52.05 2.21 0 4-1.79 4-4s-1.79-4-4-4m1.69 10.16L22.53 20H23v-2c0-2.14-3.56-3.5-6.31-3.84m-3.68 1.97L14.88 18H9c.08-.24.88-1.01 2.91-1.57zM1.41 1.71 0 3.12l4 4V10H1v2h3v3h2v-3h2.88l2.51 2.51C9.19 15.11 7 16.3 7 18v2h9.88l4 4 1.41-1.41zM6 10v-.88l.88.88z" />
  </svg>
);

export { SvgPersonAddDisabled };