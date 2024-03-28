import type { SVGProps } from "react";

const SvgMode = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M14.06 9.02 5 18.08V19h.92l9.06-9.06z" opacity={0.3} />
    <path d="M18.37 3.29c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83a.996.996 0 0 0 0-1.41zm-.56 6.65-3.75-3.75L3 17.25V21h3.75zM5 19v-.92l9.06-9.06.92.92L5.92 19z" />
  </svg>
);

export { SvgMode };
