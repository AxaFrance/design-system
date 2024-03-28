import type { SVGProps } from "react";

const SvgChatBubbleOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M22 2H2v20l4-4h16zm-2 14H6l-2 2V4h16z" />
  </svg>
);

export { SvgChatBubbleOutline };
