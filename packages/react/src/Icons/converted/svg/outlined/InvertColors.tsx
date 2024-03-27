import type { SVGProps } from "react";

const SvgInvertColors = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M12 4.81V19c-3.31 0-6-2.63-6-5.87 0-1.56.62-3.03 1.75-4.14zM12 2 6.35 7.56C4.9 8.99 4 10.96 4 13.13 4 17.48 7.58 21 12 21s8-3.52 8-7.87c0-2.17-.9-4.14-2.35-5.57z" />
  </svg>
);

export { SvgInvertColors };
