import type { SVGProps } from "react";

const SvgFilter4 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M21 3H7v14h14zm-4 12h-2v-4h-4V5h2v4h2V5h2z" opacity={0.3} />
    <path d="M3 23h16v-2H3V5H1v16c0 1.1.9 2 2 2m4-4h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2M7 3h14v14H7zm8 6h-2V5h-2v6h4v4h2V5h-2z" />
  </svg>
);

export { SvgFilter4 };
