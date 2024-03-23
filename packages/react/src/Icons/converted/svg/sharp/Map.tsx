import type { SVGProps } from "react";

const SvgMap = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M15 5.1 9 3 3 5.02v16.2l6-2.33 6 2.1 6-2.02V2.77zm0 13.79-6-2.11V5.11l6 2.11z" />
  </svg>
);

export { SvgMap };
