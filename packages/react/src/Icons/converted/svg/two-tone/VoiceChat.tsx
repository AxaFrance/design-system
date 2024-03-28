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
    <path
      d="M4 17.17 5.17 16H20V4H4zM7 7h7v2.4L17 7v6l-3-2.4V13H7z"
      opacity={0.3}
    />
    <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 14H5.17L4 17.17V4h16zm-6-5.4 3 2.4V7l-3 2.4V7H7v6h7z" />
  </svg>
);

export { SvgVoiceChat };
