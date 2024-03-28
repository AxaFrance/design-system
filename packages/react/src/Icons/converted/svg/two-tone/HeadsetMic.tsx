import type { SVGProps } from "react";

const SvgHeadsetMic = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M5 17c0 .55.45 1 1 1h1v-4H5zm12-3h2v4h-2z" opacity={0.3} />
    <path d="M12 1a9 9 0 0 0-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h4v1h-7v2h6c1.66 0 3-1.34 3-3V10a9 9 0 0 0-9-9M7 14v4H6c-.55 0-1-.45-1-1v-3zm12 4h-2v-4h2z" />
  </svg>
);

export { SvgHeadsetMic };
