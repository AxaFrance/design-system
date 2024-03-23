import type { SVGProps } from "react";

const SvgNightlife = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M1 5h14l-6 9v4h2v2H5v-2h2v-4zm9.1 4 1.4-2H4.49l1.4 2zM17 5h5v3h-3v9c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3a3 3 0 0 1 1 .17z" />
  </svg>
);

export { SvgNightlife };
