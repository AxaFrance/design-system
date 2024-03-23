import type { SVGProps } from "react";

const SvgCardMembership = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M22 2H2v15h6v5l4-2 4 2v-5h6zm-2 13H4v-2h16zm0-5H4V4h16z" />
  </svg>
);

export { SvgCardMembership };
