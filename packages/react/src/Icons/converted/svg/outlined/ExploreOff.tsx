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
    <path d="M12 4c4.41 0 8 3.59 8 8 0 1.48-.41 2.86-1.12 4.06l1.46 1.46A9.97 9.97 0 0 0 22 12c0-5.52-4.48-10-10-10-2.04 0-3.93.61-5.51 1.66l1.46 1.46A7.87 7.87 0 0 1 12 4m2.91 8.08L17.5 6.5l-5.58 2.59zM2.1 4.93l1.56 1.56A9.9 9.9 0 0 0 2 12c0 5.52 4.48 10 10 10 2.04 0 3.93-.61 5.51-1.66l1.56 1.56 1.41-1.41L3.51 3.51zm3.02 3.01 3.98 3.98-2.6 5.58 5.58-2.59 3.98 3.98c-1.2.7-2.58 1.11-4.06 1.11-4.41 0-8-3.59-8-8 0-1.48.41-2.86 1.12-4.06" />
  </svg>
);

export { SvgExploreOff };
