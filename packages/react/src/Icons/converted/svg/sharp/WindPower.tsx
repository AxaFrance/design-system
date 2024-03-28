import type { SVGProps } from "react";

const SvgWindPower = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M4 3h6v2H4zM1 7h5v2H1zM3 19h5v2H3zM15.32 12.09l5.42-9.04L17.32 1 12 5.97v4.74a2.485 2.485 0 0 1 3.32 1.38M10.5 13c0-.82.4-1.54 1.01-2H1v4l7 2 3.44-2.06A2.48 2.48 0 0 1 10.5 13M20.17 23 23 20.17l-3.54-6.36-3.98-1c0 .06.02.12.02.19a2.5 2.5 0 0 1-2.5 2.5c-.36 0-.69-.08-1-.21V21c-1.1 0-2 .9-2 2h6c0-1.1-.9-2-2-2v-4.17z" />
    <circle cx={13} cy={13} r={1.5} />
  </svg>
);

export { SvgWindPower };
