import type { SVGProps } from "react";

const SvgNature = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M13 16.12c3.37-.4 6.01-3.19 6.16-6.64.17-3.87-3.02-7.25-6.89-7.31-3.92-.05-7.1 3.1-7.1 7A6.98 6.98 0 0 0 11 16.06V20H6c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1h-5z" />
  </svg>
);

export { SvgNature };
