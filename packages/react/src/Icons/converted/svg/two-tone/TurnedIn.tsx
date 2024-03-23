import type { SVGProps } from "react";

const SvgTurnedIn = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2m0 14.97-4.21-1.81-.79-.34-.79.34L7 17.97V5h10z" />
    <path d="m7 17.97 4.21-1.81.79-.34.79.34L17 17.97V5H7z" opacity={0.3} />
  </svg>
);

export { SvgTurnedIn };
