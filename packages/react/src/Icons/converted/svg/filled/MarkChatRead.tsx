import type { SVGProps } from "react";

const SvgMarkChatRead = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="m17.34 20-3.54-3.54 1.41-1.41 2.12 2.12 4.24-4.24L23 14.34zM12 17a6.995 6.995 0 0 1 10-6.32V4c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v18l4-4h6c0-.17.01-.33.03-.5A4 4 0 0 1 12 17" />
  </svg>
);

export { SvgMarkChatRead };
