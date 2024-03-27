import type { SVGProps } from "react";

const SvgCottage = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M18 19h-5v-4h-2v4H6v-8.9l6-4.58 6 4.58z" opacity={0.3} />
    <path d="M12 3 6 7.58V6H4v3.11L1 11.4l1.21 1.59L4 11.62V21h16v-9.38l1.79 1.36L23 11.4zm6 16h-5v-4h-2v4H6v-8.9l6-4.58 6 4.58zM10 1c0 1.66-1.34 3-3 3-.55 0-1 .45-1 1H4c0-1.66 1.34-3 3-3 .55 0 1-.45 1-1z" />
  </svg>
);

export { SvgCottage };
