import type { SVGProps } from "react";

const SvgCopyAll = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M20 2H7v16h13zm-2 14H9V4h9zM3 15v-2h2v2zm0-5.5h2v2H3zM10 20h2v2h-2zm-7-1.5v-2h2v2zM5 22H3v-2h2zm3.5 0h-2v-2h2zm7 0h-2v-2h2zM3 6h2v2H3z" />
  </svg>
);

export { SvgCopyAll };
