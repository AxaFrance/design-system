import type { SVGProps } from "react";

const SvgMarkAsUnread = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M16.23 7h4.12L10.5 2 2 6.21V17h2V7.4L10.5 4z" />
    <path d="M5 8v13h17V8zm15 4-6.5 3.33L7 12v-2l6.5 3.33L20 10z" />
  </svg>
);

export { SvgMarkAsUnread };
