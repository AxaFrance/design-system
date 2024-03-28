import type { SVGProps } from "react";

const SvgVideoCall = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M5 16h10V8H5zm2-5h2V9h2v2h2v2h-2v2H9v-2H7z" opacity={0.3} />
    <path d="M17 7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4zm-2 9H5V8h10zm-6-1h2v-2h2v-2h-2V9H9v2H7v2h2z" />
  </svg>
);

export { SvgVideoCall };
