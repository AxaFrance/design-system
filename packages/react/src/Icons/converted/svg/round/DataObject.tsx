import type { SVGProps } from "react";

const SvgDataObject = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M4 7v2c0 .55-.45 1-1 1s-1 .45-1 1v2c0 .55.45 1 1 1s1 .45 1 1v2c0 1.66 1.34 3 3 3h2c.55 0 1-.45 1-1s-.45-1-1-1H7c-.55 0-1-.45-1-1v-2c0-1.3-.84-2.42-2-2.83v-.34C5.16 11.42 6 10.3 6 9V7c0-.55.45-1 1-1h2c.55 0 1-.45 1-1s-.45-1-1-1H7C5.34 4 4 5.34 4 7M21 10c-.55 0-1-.45-1-1V7c0-1.66-1.34-3-3-3h-2c-.55 0-1 .45-1 1s.45 1 1 1h2c.55 0 1 .45 1 1v2c0 1.3.84 2.42 2 2.83v.34c-1.16.41-2 1.52-2 2.83v2c0 .55-.45 1-1 1h-2c-.55 0-1 .45-1 1s.45 1 1 1h2c1.66 0 3-1.34 3-3v-2c0-.55.45-1 1-1s1-.45 1-1v-2c0-.55-.45-1-1-1" />
  </svg>
);

export { SvgDataObject };
