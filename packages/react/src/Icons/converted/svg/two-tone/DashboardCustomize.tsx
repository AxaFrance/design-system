import type { SVGProps } from "react";

const SvgDashboardCustomize = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M5 15h4v4H5zM5 5h4v4H5zM15 5h4v4h-4z" opacity={0.3} />
    <path d="M3 11h8V3H3zm2-6h4v4H5zM13 3v8h8V3zm6 6h-4V5h4zM3 21h8v-8H3zm2-6h4v4H5zM18 13h-2v3h-3v2h3v3h2v-3h3v-2h-3z" />
  </svg>
);

export { SvgDashboardCustomize };
