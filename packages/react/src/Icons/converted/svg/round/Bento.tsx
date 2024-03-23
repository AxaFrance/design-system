import type { SVGProps } from "react";

const SvgBento = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M16 11V5h4c1.1 0 2 .9 2 2v4zm4 8c1.1 0 2-.9 2-2v-4h-6v6zM14 5v14H4c-1.1 0-2-.9-2-2V7c0-1.1.9-2 2-2zm-4.5 7c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5.67 1.5 1.5 1.5 1.5-.67 1.5-1.5" />
  </svg>
);

export { SvgBento };
