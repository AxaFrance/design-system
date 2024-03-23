import type { SVGProps } from "react";

const SvgStickyNote2 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M2.99 3 3 21h12l6-6V3zM7 8h10v2H7zm5 6H7v-2h5zm2 5.5V14h5.5z" />
  </svg>
);

export { SvgStickyNote2 };
