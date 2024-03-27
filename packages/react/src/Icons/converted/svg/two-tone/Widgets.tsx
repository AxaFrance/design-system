import type { SVGProps } from "react";

const SvgWidgets = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M5 5h4v4H5zm10 10h4v4h-4zM5 15h4v4H5zM16.66 4.52l-2.83 2.82 2.83 2.83 2.83-2.83z"
      opacity={0.3}
    />
    <path d="M16.66 1.69 11 7.34 16.66 13l5.66-5.66zm-2.83 5.65 2.83-2.83 2.83 2.83-2.83 2.83zM3 3v8h8V3zm6 6H5V5h4zM3 21h8v-8H3zm2-6h4v4H5zm8-2v8h8v-8zm6 6h-4v-4h4z" />
  </svg>
);

export { SvgWidgets };
