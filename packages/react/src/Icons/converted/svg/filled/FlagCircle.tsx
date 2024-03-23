import type { SVGProps } from "react";

const SvgFlagCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m6 13h-5l-1-2H9.5v5H8V7h6l1 2h3z" />
  </svg>
);

export { SvgFlagCircle };
