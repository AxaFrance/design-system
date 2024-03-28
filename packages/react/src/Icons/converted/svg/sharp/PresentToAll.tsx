import type { SVGProps } from "react";

const SvgPresentToAll = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M23 3H1v18h22zm-2 16.02H3V4.98h18zM10 12H8l4-4 4 4h-2v4h-4z" />
  </svg>
);

export { SvgPresentToAll };
