import type { SVGProps } from "react";

const SvgBookmarks = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="m19 18 2 1V1H7v2h12zM17 5H3v18l7-3 7 3z" />
  </svg>
);

export { SvgBookmarks };
