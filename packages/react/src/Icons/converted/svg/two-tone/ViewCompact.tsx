import type { SVGProps } from "react";

const SvgViewCompact = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M4 13.25h2.5v-2.5H4zM4 18h2.5v-2.5H4zm4.5-9.5H11V6H8.5zm9 9.5H20v-2.5h-2.5zm0-4.75H20v-2.5h-2.5zm0-7.25v2.5H20V6zM13 8.5h2.5V6H13zm-4.5 4.75H11v-2.5H8.5zm0 4.75H11v-2.5H8.5zM4 8.5h2.5V6H4zm9 4.75h2.5v-2.5H13zM13 18h2.5v-2.5H13z"
      opacity={0.3}
    />
    <path d="M2 4v16h20V4zm4.5 14H4v-2.5h2.5zm0-4.75H4v-2.5h2.5zm0-4.75H4V6h2.5zM11 18H8.5v-2.5H11zm0-4.75H8.5v-2.5H11zm0-4.75H8.5V6H11zm4.5 9.5H13v-2.5h2.5zm0-4.75H13v-2.5h2.5zm0-4.75H13V6h2.5zM20 18h-2.5v-2.5H20zm0-4.75h-2.5v-2.5H20zm0-4.75h-2.5V6H20z" />
  </svg>
);

export { SvgViewCompact };
