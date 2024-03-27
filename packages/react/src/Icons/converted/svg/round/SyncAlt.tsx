import type { SVGProps } from "react";

const SvgSyncAlt = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="m21.65 7.65-2.79-2.79a.501.501 0 0 0-.86.35V7H4c-.55 0-1 .45-1 1s.45 1 1 1h14v1.79c0 .45.54.67.85.35l2.79-2.79c.2-.19.2-.51.01-.7M20 15H6v-1.79c0-.45-.54-.67-.85-.35l-2.79 2.79c-.2.19-.2.51-.01.7l2.79 2.79c.32.32.86.1.86-.35V17h14c.55 0 1-.45 1-1s-.45-1-1-1" />
  </svg>
);

export { SvgSyncAlt };
