import type { SVGProps } from "react";

const SvgInsertPhoto = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M21 21V3H3v18zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5z" />
  </svg>
);

export { SvgInsertPhoto };
