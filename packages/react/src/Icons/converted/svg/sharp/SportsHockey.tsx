import type { SVGProps } from "react";

const SvgSportsHockey = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M2 17v3h2v-4H3c-.55 0-1 .45-1 1M9 16H5v4l4.69-.01c.38 0 .72-.21.89-.55l.87-1.9-1.59-3.48zM21.71 16.29A1 1 0 0 0 21 16h-1v4h2v-3c0-.28-.11-.53-.29-.71M13.6 12.84 17.65 4H14.3l-1.76 3.97-.49 1.1-.05.14L9.7 4H6.35l4.05 8.84 1.52 3.32.08.18 1.42 3.1c.17.34.51.55.89.55L19 20v-4h-4z" />
  </svg>
);

export { SvgSportsHockey };
