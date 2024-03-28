import type { SVGProps } from "react";

const SvgLooks4 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M.04 0h24v24h-24z" />
    <path d="M21.04 3h-18v18h18zm-6 14h-2v-4h-4V7h2v4h2V7h2z" />
  </svg>
);

export { SvgLooks4 };
