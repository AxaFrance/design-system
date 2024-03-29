import type { SVGProps } from "react";

const SvgPostAdd = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M17 19.22H5V7h7V5H3v16h16v-9h-2z" />
    <path d="M19 2h-2v3h-3c.01.01 0 2 0 2h3v2.99c.01.01 2 0 2 0V7h3V5h-3zM7 9h8v2H7zM7 12v2h8v-2h-3zM7 15h8v2H7z" />
  </svg>
);

export { SvgPostAdd };
