import type { SVGProps } from "react";

const SvgFactCheck = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M4 19h16V5H4zm9.41-8.25 1.41 1.42L17.99 9l1.42 1.42L14.82 15 12 12.16zM5 7h5v2H5zm0 4h5v2H5zm0 4h5v2H5z"
      opacity={0.3}
    />
    <path d="M20 3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H4V5h16z" />
    <path d="M19.41 10.42 17.99 9l-3.17 3.17-1.41-1.42L12 12.16 14.82 15zM5 7h5v2H5zM5 11h5v2H5zM5 15h5v2H5z" />
  </svg>
);

export { SvgFactCheck };
