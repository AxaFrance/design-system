import type { SVGProps } from "react";

const SvgAutoAwesomeMotion = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M14 2H4a2 2 0 0 0-2 2v10h2V4h10zm4 4H8a2 2 0 0 0-2 2v10h2V8h10zm2 4h-8a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2" />
  </svg>
);

export { SvgAutoAwesomeMotion };
