import type { SVGProps } from "react";

const SvgColorize = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="m20.71 5.63-2.34-2.34a.996.996 0 0 0-1.41 0l-3.12 3.12-1.23-1.21c-.39-.39-1.02-.38-1.41 0a.996.996 0 0 0 0 1.41l.72.72-8.77 8.77q-.15.15-.15.36v4.04c0 .28.22.5.5.5h4.04c.13 0 .26-.05.35-.15l8.77-8.77.72.72a.996.996 0 1 0 1.41-1.41l-1.22-1.22 3.12-3.12a.99.99 0 0 0 .02-1.42M6.92 19 5 17.08l8.06-8.06 1.92 1.92z" />
  </svg>
);

export { SvgColorize };
