import type { SVGProps } from "react";

const SvgVideocamOff = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M12.39 8 15 10.61V8zM5 8v8h9.73l-8-8z" opacity={0.3} />
    <path d="M3.41 1.86 2 3.27 4.73 6H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.21 0 .39-.08.55-.18L19.73 21l1.41-1.41zM5 16V8h1.73l8 8zm10-8v2.61l6 6V6.5l-4 4V7c0-.55-.45-1-1-1h-5.61l2 2z" />
  </svg>
);

export { SvgVideocamOff };
