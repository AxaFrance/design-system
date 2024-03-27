import type { SVGProps } from "react";

const SvgRoomPreferences = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M14 11.26V6h3v4h2V4h-5V3H5v16H3v2h9.26A6.96 6.96 0 0 1 11 17c0-2.38 1.19-4.47 3-5.74M10 11h2v2h-2zm11.69 5.37 1.14-1-1-1.73-1.45.49q-.48-.405-1.08-.63L19 12h-2l-.3 1.49q-.6.225-1.08.63l-1.45-.49-1 1.73 1.14 1c-.08.5-.08.76 0 1.26l-1.14 1 1 1.73 1.45-.49q.48.405 1.08.63L17 22h2l.3-1.49q.6-.225 1.08-.63l1.45.49 1-1.73-1.14-1c.08-.51.08-.77 0-1.27M18 19c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2" />
  </svg>
);

export { SvgRoomPreferences };
