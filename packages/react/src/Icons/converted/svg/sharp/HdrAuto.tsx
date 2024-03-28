import type { SVGProps } from "react";

const SvgHdrAuto = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M12.04 8.04h-.09l-1.6 4.55h3.29z" />
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m3.21 15-.98-2.81H9.78l-1 2.81h-1.9l4.13-11h1.97l4.13 11z" />
  </svg>
);

export { SvgHdrAuto };
