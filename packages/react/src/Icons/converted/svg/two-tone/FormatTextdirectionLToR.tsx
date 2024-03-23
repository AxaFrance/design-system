import type { SVGProps } from "react";

const SvgFormatTextdirectionLToR = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M9 8V4c-1.1 0-2 .9-2 2s.9 2 2 2" opacity={0.3} />
    <path d="M9 10v5h2V4h2v11h2V4h2V2H9C6.79 2 5 3.79 5 6s1.79 4 4 4m0-6v4c-1.1 0-2-.9-2-2s.9-2 2-2m12 14-4-4v3H5v2h12v3z" />
  </svg>
);

export { SvgFormatTextdirectionLToR };
