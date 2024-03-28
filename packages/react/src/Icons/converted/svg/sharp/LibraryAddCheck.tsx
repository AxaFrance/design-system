import type { SVGProps } from "react";

const SvgLibraryAddCheck = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M22 2H6v16h16zm-9.53 12L9 10.5l1.4-1.41 2.07 2.08L17.6 6 19 7.41zM4 6H2v16h16v-2H4z" />
    <path fill="none" d="M0 0h24v24H0z" />
  </svg>
);

export { SvgLibraryAddCheck };
