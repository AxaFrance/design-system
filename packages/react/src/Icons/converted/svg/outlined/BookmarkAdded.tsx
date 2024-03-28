import type { SVGProps } from "react";

const SvgBookmarkAdded = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M17 11v6.97l-5-2.14-5 2.14V5h6V3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V11zm.83-2L15 6.17l1.41-1.41 1.41 1.41 3.54-3.54 1.41 1.41z" />
  </svg>
);

export { SvgBookmarkAdded };
