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
    <path d="m21.9 21.9-6.1-6.1-2.69-2.69L5 5 3.59 3.59 2.1 2.1.69 3.51 3 5.83V19c0 1.1.9 2 2 2h13.17l2.31 2.31zM5 19V7.83l6.84 6.84-.84 1.05L9 13l-3 4h8.17l2 2zM7.83 5l-2-2H19c1.1 0 2 .9 2 2v13.17l-2-2V5z" />
  </svg>
);

export { SvgImageNotSupported };
