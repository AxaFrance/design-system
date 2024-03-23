import type { SVGProps } from "react";

const SvgCabin = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M13.94 7h-3.89L12 5.52zm-6.5 2h9.12L18 10.1v.9H6v-.9zM18 13v2H6v-2zM6 19v-2h12v2z"
      opacity={0.3}
    />
    <path d="M10 1c0 1.66-1.34 3-3 3-.55 0-1 .45-1 1H4c0-1.66 1.34-3 3-3 .55 0 1-.45 1-1zm2 2L6 7.58V6H4v3.11L1 11.4l1.21 1.59L4 11.62V21h16v-9.38l1.79 1.36L23 11.4zm1.94 4h-3.89L12 5.52zm-6.5 2h9.12L18 10.1v.9H6v-.9zM18 13v2H6v-2zM6 19v-2h12v2z" />
  </svg>
);

export { SvgCabin };
