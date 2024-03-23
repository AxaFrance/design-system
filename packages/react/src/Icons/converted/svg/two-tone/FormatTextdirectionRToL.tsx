import type { SVGProps } from "react";

const SvgFormatTextdirectionRToL = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M8 6c0 1.1.9 2 2 2V4c-1.1 0-2 .9-2 2" opacity={0.3} />
    <path d="M6 6c0 2.21 1.79 4 4 4v5h2V4h2v11h2V4h2V2h-8C7.79 2 6 3.79 6 6m4 2c-1.1 0-2-.9-2-2s.9-2 2-2zM4 18l4 4v-3h12v-2H8v-3z" />
  </svg>
);

export { SvgFormatTextdirectionRToL };
