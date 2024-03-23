import type { SVGProps } from "react";

const SvgWebStories = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M17 4h2v16h-2zM2 2v20h13V2zm19 16h1.5V6H21z" />
  </svg>
);

export { SvgWebStories };
