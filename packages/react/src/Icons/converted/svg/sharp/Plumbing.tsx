import type { SVGProps } from "react";

const SvgPlumbing = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="m16.16 5.64 3.54 3.54a3 3 0 0 0 0-4.24L16.16 1.4l-4.24 4.24 2.12 2.12zM4.842 12.708l3.535-3.535 2.122 2.12-3.536 3.536z" />
    <path d="m15.45 7.76-1.41 1.41-4.25-4.24-2.12 2.12 4.24 4.24-8.49 8.49 2.83 2.83L16.86 12l.71.71 1.41-1.41z" />
  </svg>
);

export { SvgPlumbing };
