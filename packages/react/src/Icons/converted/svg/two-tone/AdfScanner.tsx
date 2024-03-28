import type { SVGProps } from "react";

const SvgAdfScanner = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M8 6h8v6H8zM19 14H5c-.55 0-1 .45-1 1v3h16v-3c0-.55-.45-1-1-1m-1 3c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1"
      opacity={0.3}
    />
    <path d="M19 12h-1V4H6v8H5c-1.66 0-3 1.34-3 3v5h20v-5c0-1.66-1.34-3-3-3M8 6h8v6H8zm12 12H4v-3c0-.55.45-1 1-1h14c.55 0 1 .45 1 1z" />
    <circle cx={18} cy={16} r={1} />
  </svg>
);

export { SvgAdfScanner };
