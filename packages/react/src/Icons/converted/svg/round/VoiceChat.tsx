import type { SVGProps } from "react";

const SvgVoiceChat = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-3.62 10.7L14 10.8V13c0 .55-.45 1-1 1H7c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h6c.55 0 1 .45 1 1v2.2l2.38-1.9a.998.998 0 0 1 1.62.78v3.84c0 .84-.97 1.3-1.62.78" />
  </svg>
);

export { SvgVoiceChat };
