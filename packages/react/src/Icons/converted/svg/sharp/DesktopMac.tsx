import type { SVGProps } from "react";

const SvgDesktopMac = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M23 2H1v16h9l-2 3v1h8v-1l-2-3h9zm-2 12H3V4h18z" />
  </svg>
);

export { SvgDesktopMac };
