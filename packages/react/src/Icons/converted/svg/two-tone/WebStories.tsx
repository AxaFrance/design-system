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
    <path d="M4 4h9v16H4z" opacity={0.3} />
    <path d="M17 4v16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2M13 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 18H4V4h9zM21 6v12c.83 0 1.5-.67 1.5-1.5v-9c0-.83-.67-1.5-1.5-1.5" />
  </svg>
);

export { SvgWebStories };
