import type { SVGProps } from "react";

const SvgPanTool = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M23 4v20H10.02L1 14.83 2.9 13 8 15.91V3h3v8h1V0h3v11h1V1h3v10h1V4z" />
  </svg>
);

export { SvgPanTool };
