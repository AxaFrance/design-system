import type { SVGProps } from "react";

const SvgVolcano = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <g fill="none">
      <path d="M0 0h24v24H0z" />
      <path d="M0 0h24v24H0z" />
    </g>
    <path d="M16.49 8h-4.14c-.82 0-1.55.5-1.86 1.26L9 13H7.3c-.79 0-1.51.47-1.83 1.19l-2.22 5C2.66 20.51 3.63 22 5.08 22h14.27c1.33 0 2.29-1.27 1.92-2.55l-2.86-10A1.99 1.99 0 0 0 16.49 8M14 1c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1M19.66 3.34a.996.996 0 0 0-1.41 0l-1.41 1.41a.996.996 0 1 0 1.41 1.41l1.41-1.41a.996.996 0 0 0 0-1.41M11.17 4.76 9.76 3.34a.996.996 0 1 0-1.41 1.41l1.41 1.41c.39.39 1.02.39 1.41 0a.984.984 0 0 0 0-1.4" />
  </svg>
);

export { SvgVolcano };
