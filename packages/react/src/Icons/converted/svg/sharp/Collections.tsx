import type { SVGProps } from "react";

const SvgCollections = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M22 18V2H6v16zm-11-6 2.03 2.71L16 11l4 5H8zM2 6v16h16v-2H4V6z" />
  </svg>
);

export { SvgCollections };
