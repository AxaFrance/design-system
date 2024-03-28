import type { SVGProps } from "react";

const SvgPrivateConnectivity = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M22 12c0-.55-.45-1-1-1h-2.07c-.49-3.39-3.4-6-6.93-6s-6.44 2.61-6.93 6H3c-.55 0-1 .45-1 1s.45 1 1 1h2.07c.49 3.39 3.4 6 6.93 6s6.44-2.61 6.93-6H21c.55 0 1-.45 1-1m-7 2.5c0 .55-.45 1-1 1h-4c-.55 0-1-.45-1-1v-3c0-.55.45-1 1-1v-1a2 2 0 0 1 2.34-1.97c.98.16 1.66 1.08 1.66 2.08v.89c.55 0 1 .45 1 1zM12.75 13c0 .41-.34.75-.75.75s-.75-.34-.75-.75.34-.75.75-.75.75.34.75.75M13 9.5v1h-2v-1c0-.55.45-1 1-1s1 .45 1 1" />
  </svg>
);

export { SvgPrivateConnectivity };
