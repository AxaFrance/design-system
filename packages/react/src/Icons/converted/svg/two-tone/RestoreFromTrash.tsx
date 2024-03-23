import type { SVGProps } from "react";

const SvgRestoreFromTrash = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M16 14h-2v4h-4v-4H8v5h8zm0 0V9H8v5l4-4z" opacity={0.3} />
    <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zm2-5V9h8v10H8zm7.5-10-1-1h-5l-1 1H5v2h14V4zM10 18h4v-4h2l-4-4-4 4h2z" />
  </svg>
);

export { SvgRestoreFromTrash };
