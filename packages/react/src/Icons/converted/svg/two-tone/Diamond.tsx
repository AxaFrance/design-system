import type { SVGProps } from "react";

const SvgDiamond = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M8.88 5H6.24l-1.5 3h2.64zM19.26 8l-1.5-3h-2.64l1.5 3zM11 16.68V10H5.44zM13 16.68 18.56 10H13zM12.88 5h-1.76l-1.5 3h4.76z"
      opacity={0.3}
    />
    <path d="M19 3H5L2 9l10 12L22 9zm-1.24 2 1.5 3h-2.65l-1.5-3zM6.24 5h2.65l-1.5 3H4.74zM11 16.68 5.44 10H11zM9.62 8l1.5-3h1.76l1.5 3zM13 16.68V10h5.56z" />
  </svg>
);

export { SvgDiamond };
