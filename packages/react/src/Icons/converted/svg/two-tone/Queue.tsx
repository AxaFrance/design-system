import type { SVGProps } from "react";

const SvgQueue = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M8 16h12V4H8zm1-7h4V5h2v4h4v2h-4v4h-2v-4H9z" opacity={0.3} />
    <path d="M2 20c0 1.1.9 2 2 2h14v-2H4V6H2zM20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 14H8V4h12zm-7-1h2v-4h4V9h-4V5h-2v4H9v2h4z" />
  </svg>
);

export { SvgQueue };
