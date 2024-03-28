import type { SVGProps } from "react";

const SvgTapAndPlay = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M2 16v2c2.76 0 5 2.24 5 5h2c0-3.87-3.13-7-7-7m0 4v3h3c0-1.66-1.34-3-3-3m0-8v2a9 9 0 0 1 9 9h2c0-6.08-4.92-11-11-11M17 1.01 7 1c-1.1 0-2 .9-2 2v7.37c.69.16 1.36.37 2 .64V5h10v13h-3.03c.52 1.25.84 2.59.95 4H17c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99" />
  </svg>
);

export { SvgTapAndPlay };
