import type { SVGProps } from "react";

const SvgImageNotSupported = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="m21.9 21.9-8.49-8.49-9.82-9.82L2.1 2.1.69 3.51 3 5.83V19c0 1.1.9 2 2 2h13.17l2.31 2.31zM5 18l3.5-4.5 2.5 3.01L12.17 15l3 3zm16 .17L5.83 3H19c1.1 0 2 .9 2 2z" />
  </svg>
);

export { SvgImageNotSupported };
