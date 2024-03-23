import type { SVGProps } from "react";

const SvgCommentBank = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M2 2v20l4-4h16V2zm17 11-2.5-1.5L14 13V5h5z" />
  </svg>
);

export { SvgCommentBank };
