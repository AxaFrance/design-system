import type { SVGProps } from "react";

const SvgTerminal = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M4 18h16V8H4zm8-3h6v2h-6zm-5.91-4.59L7.5 9l4 4-4 4-1.41-1.41L8.67 13z"
      opacity={0.3}
    />
    <path d="M12 15h6v2h-6z" />
    <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16c1.1 0 2-.9 2-2V6a2 2 0 0 0-2-2m0 14H4V8h16z" />
    <path d="m7.5 17 4-4-4-4-1.41 1.41L8.67 13l-2.58 2.59z" />
  </svg>
);

export { SvgTerminal };
