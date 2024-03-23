import type { SVGProps } from "react";

const SvgBorderTop = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M7 21h2v-2H7zm0-8h2v-2H7zm4 0h2v-2h-2zm0 8h2v-2h-2zm-8-4h2v-2H3zm0 4h2v-2H3zm0-8h2v-2H3zm0-4h2V7H3zm8 8h2v-2h-2zm8-8h2V7h-2zm0 4h2v-2h-2zM3 4c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1m16 13h2v-2h-2zm-4 4h2v-2h-2zM11 9h2V7h-2zm8 12h2v-2h-2zm-4-8h2v-2h-2z" />
  </svg>
);

export { SvgBorderTop };
