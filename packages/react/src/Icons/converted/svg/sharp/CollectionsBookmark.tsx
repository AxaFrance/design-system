import type { SVGProps } from "react";

const SvgCollectionsBookmark = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M4 6H2v16h16v-2H4zm18-4H6v16h16zm-2 10-2.5-1.5L15 12V4h5z" />
  </svg>
);

export { SvgCollectionsBookmark };
