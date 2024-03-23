import type { SVGProps } from "react";

const SvgFlipToBack = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M9 7H7v2h2zm0 4H7v2h2zm0-8a2 2 0 0 0-2 2h2zm4 12h-2v2h2zm6-12v2h2c0-1.1-.9-2-2-2m-6 0h-2v2h2zM9 17v-2H7a2 2 0 0 0 2 2m10-4h2v-2h-2zm0-4h2V7h-2zm0 8c1.1 0 2-.9 2-2h-2zM4 7c-.55 0-1 .45-1 1v11c0 1.1.9 2 2 2h11c.55 0 1-.45 1-1s-.45-1-1-1H6c-.55 0-1-.45-1-1V8c0-.55-.45-1-1-1m11-2h2V3h-2zm0 12h2v-2h-2z" />
  </svg>
);

export { SvgFlipToBack };
