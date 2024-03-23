import type { SVGProps } from "react";

const SvgHighlight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M11 20h2v-3.83l3-3V11H8v2.17l3 3z" opacity={0.3} />
    <path d="m6 14 3 3v5h6v-5l3-3V9H6zm2-3h8v2.17l-3 3V20h-2v-3.83l-3-3zm3-9h2v3h-2zM4.916 4.464l2.12 2.122L5.62 8 3.5 5.877zM18.372 8l-1.414-1.414 2.12-2.12 1.415 1.413z" />
  </svg>
);

export { SvgHighlight };
