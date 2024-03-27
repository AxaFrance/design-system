import type { SVGProps } from "react";

const SvgHeadphones = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M5 15h2v4H5zM17 15h2v4h-2z" opacity={0.3} />
    <path d="M12 3a9 9 0 0 0-9 9v7c0 1.1.9 2 2 2h4v-8H5v-1c0-3.87 3.13-7 7-7s7 3.13 7 7v1h-4v8h4c1.1 0 2-.9 2-2v-7a9 9 0 0 0-9-9M7 15v4H5v-4zm12 4h-2v-4h2z" />
  </svg>
);

export { SvgHeadphones };
