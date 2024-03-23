import type { SVGProps } from "react";

const SvgLibraryAdd = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M8 16h12V4H8zm2-7h3V6h2v3h3v2h-3v3h-2v-3h-3z" opacity={0.3} />
    <path d="M4 22h14v-2H4V6H2v14c0 1.1.9 2 2 2M8 2c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm12 14H8V4h12zm-7-2h2v-3h3V9h-3V6h-2v3h-3v2h3z" />
  </svg>
);

export { SvgLibraryAdd };
