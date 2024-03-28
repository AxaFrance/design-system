import type { SVGProps } from "react";

const SvgTornado = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M9.1 13h5.8l1.74-3H7.36zM12 18.01 13.74 15h-3.48zM4.47 5l1.74 3h11.58l1.74-3z"
      opacity={0.3}
    />
    <path d="m1 3 11 19L23 3zm11 15.01L10.26 15h3.48zM14.9 13H9.1l-1.74-3h9.27zM6.21 8 4.47 5h15.06l-1.74 3z" />
  </svg>
);

export { SvgTornado };
