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
    <path d="M19.04 3h-14c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16h-14V5h14zm-6-2h2V7h-2v4h-2V7h-2v6h4z" />
  </svg>
);

export { SvgLooks4 };
