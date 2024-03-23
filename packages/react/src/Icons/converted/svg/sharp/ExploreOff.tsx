import type { SVGProps } from "react";

const SvgExploreOff = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="m18 6-2.91 6.26 5.25 5.25A9.9 9.9 0 0 0 22 12c0-5.52-4.48-10-10-10-2.04 0-3.93.61-5.51 1.66l5.25 5.25zM2.1 4.93l1.56 1.56A9.9 9.9 0 0 0 2 12c0 5.52 4.48 10 10 10 2.04 0 3.93-.61 5.51-1.66l1.56 1.56 1.41-1.41L3.51 3.51zm6.81 6.81 3.35 3.35L6 18z" />
  </svg>
);

export { SvgExploreOff };
