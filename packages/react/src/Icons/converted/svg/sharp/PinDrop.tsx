import type { SVGProps } from "react";

const SvgPinDrop = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fillRule="evenodd"
      d="M5 20h14v2H5zm7-13c-1.1 0-2 .9-2 2s.9 2 2 2a2 2 0 1 0 0-4m0-5c3.27 0 7 2.46 7 7.15 0 3.12-2.33 6.41-7 9.85-4.67-3.44-7-6.73-7-9.85C5 4.46 8.73 2 12 2"
    />
  </svg>
);

export { SvgPinDrop };
