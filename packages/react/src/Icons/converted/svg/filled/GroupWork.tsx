import type { SVGProps } from "react";

const SvgGroupWork = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2M8 17.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5M9.5 8a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1-5 0m6.5 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5" />
  </svg>
);

export { SvgGroupWork };
