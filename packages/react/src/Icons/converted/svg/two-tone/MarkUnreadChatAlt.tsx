import type { SVGProps } from "react";

const SvgMarkUnreadChatAlt = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M4 17.17 5.17 16H20V7.9c-.32.06-.66.1-1 .1s-.68-.04-1-.1V8H6V6h9.03c-.44-.58-.77-1.26-.92-2H4zM6 9h12v2H6zm0 3h8v2H6z"
      opacity={0.3}
    />
    <circle cx={19} cy={3} r={3} />
    <path d="M20 16H5.17L4 17.17V4h10.1a5 5 0 0 1 0-2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V6.97c-.58.44-1.26.77-2 .92z" />
    <path d="M6 12h8v2H6zM6 9h12v2H6zM6 8h12v-.1A5 5 0 0 1 15.03 6H6z" />
  </svg>
);

export { SvgMarkUnreadChatAlt };
