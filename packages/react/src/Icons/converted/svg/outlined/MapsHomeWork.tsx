import type { SVGProps } from "react";

const SvgMapsHomeWork = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M17 7h2v2h-2zM17 11h2v2h-2zM17 15h2v2h-2zM1 11v10h6v-5h2v5h6V11L8 6zm12 8h-2v-5H5v5H3v-7l5-3.5 5 3.5z" />
    <path d="M10 3v1.97l2 1.43V5h9v14h-4v2h6V3z" />
  </svg>
);

export { SvgMapsHomeWork };
