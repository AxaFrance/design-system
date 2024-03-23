import type { SVGProps } from "react";

const SvgSwitchRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M24 24H0V0h24z" />
    <path d="M15.5 15.38V8.62L18.88 12zM14 19l7-7-7-7zm-4 0V5l-7 7z" />
  </svg>
);

export { SvgSwitchRight };
