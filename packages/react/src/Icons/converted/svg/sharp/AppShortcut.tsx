import type { SVGProps } from "react";

const SvgAppShortcut = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M17 18H7V6h10v1h2V1H5v22h14v-6h-2zM20.38 9.62 21 11l.62-1.38L23 9l-1.38-.62L21 7l-.62 1.38L19 9z" />
    <path d="m16 8-1.25 2.75L12 12l2.75 1.25L16 16l1.25-2.75L20 12l-2.75-1.25zM21 13l-.62 1.38L19 15l1.38.62L21 17l.62-1.38L23 15l-1.38-.62z" />
  </svg>
);

export { SvgAppShortcut };
