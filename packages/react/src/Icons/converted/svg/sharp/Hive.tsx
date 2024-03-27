import type { SVGProps } from "react";

const SvgHive = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="m13.79 8 1.8-3-1.8-3h-3.58l-1.8 3 1.8 3zM10.21 9l-1.8 3 1.8 3h3.58l1.8-3-1.8-3zM16.45 11.51h3.59l1.79-3-1.79-3h-3.59l-1.8 3zM20.04 12.51h-3.59l-1.8 3 1.8 3h3.59l1.79-3zM7.55 11.51l1.8-3-1.8-3H3.96l-1.79 3 1.79 3zM7.55 12.51H3.96l-1.79 3 1.79 3h3.59l1.8-3zM10.21 16l-1.8 3 1.8 3h3.58l1.8-3-1.8-3z" />
  </svg>
);

export { SvgHive };
