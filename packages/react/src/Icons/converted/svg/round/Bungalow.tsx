import type { SVGProps } from "react";

const SvgBungalow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M12 16c.55 0 1 .45 1 1v4h3c.55 0 1-.45 1-1v-5.21l.57.92a1.003 1.003 0 0 0 1.7-1.06L12.85 4.36a1 1 0 0 0-1.7 0L4.73 14.65c-.29.47-.15 1.09.32 1.38s1.08.15 1.38-.32L7 14.8V20c0 .55.45 1 1 1h3v-4c0-.55.45-1 1-1m1-3c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1" />
  </svg>
);

export { SvgBungalow };
