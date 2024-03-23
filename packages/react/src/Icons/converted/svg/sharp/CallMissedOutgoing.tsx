import type { SVGProps } from "react";

const SvgCallMissedOutgoing = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="m3 8.41 9 9 7-7V15h2V7h-8v2h4.59L12 14.59 4.41 7z" />
  </svg>
);

export { SvgCallMissedOutgoing };
