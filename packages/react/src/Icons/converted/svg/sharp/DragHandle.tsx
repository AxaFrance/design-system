import type { SVGProps } from "react";

const SvgDragHandle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M20 9H4v2h16zM4 15h16v-2H4z" />
  </svg>
);

export { SvgDragHandle };
