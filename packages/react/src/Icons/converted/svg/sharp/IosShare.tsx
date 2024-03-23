import type { SVGProps } from "react";

const SvgIosShare = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M20 8h-5v2h3v11H6V10h3V8H4v15h16z" />
    <path d="M11 16h2V5h3l-4-4-4 4h3z" />
  </svg>
);

export { SvgIosShare };
