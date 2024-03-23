import type { SVGProps } from "react";

const SvgBookmarkBorder = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M19 3H5v18l7-3 7 3zm-2 15-5-2.18L7 18V5h10z" />
  </svg>
);

export { SvgBookmarkBorder };
