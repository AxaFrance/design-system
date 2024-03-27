import type { SVGProps } from "react";

const SvgMailLock = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M20 6H4l8 5z" opacity={0.3} />
    <path d="M12 13 4 8v10h12v-3.03a5 5 0 0 1 4-4.9V8z" opacity={0.3} />
    <path d="M4 18V8l8 5 8-5v2.08c.32-.07.66-.1 1-.1h1V6c0-1.1-.9-2-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h12v-2zM20 6l-8 5-8-5z" />
    <path d="M23 15v-1c0-1.1-.9-2-2-2s-2 .9-2 2v1c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1m-3 0v-1c0-.55.45-1 1-1s1 .45 1 1v1z" />
  </svg>
);

export { SvgMailLock };
