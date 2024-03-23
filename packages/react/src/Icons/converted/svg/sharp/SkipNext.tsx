import type { SVGProps } from "react";

const SvgSkipNext = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="m6 18 8.5-6L6 6zM16 6v12h2V6z" />
  </svg>
);

export { SvgSkipNext };
