import type { SVGProps } from "react";

const SvgPowerInput = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M2 10c0 .55.45 1 1 1h17c.55 0 1-.45 1-1s-.45-1-1-1H3c-.55 0-1 .45-1 1m1 5h3c.55 0 1-.45 1-1s-.45-1-1-1H3c-.55 0-1 .45-1 1s.45 1 1 1m7 0h3c.55 0 1-.45 1-1s-.45-1-1-1h-3c-.55 0-1 .45-1 1s.45 1 1 1m7 0h3c.55 0 1-.45 1-1s-.45-1-1-1h-3c-.55 0-1 .45-1 1s.45 1 1 1" />
  </svg>
);

export { SvgPowerInput };
