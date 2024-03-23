import type { SVGProps } from "react";

const SvgPieChartOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2m-1 17.94c-3.93-.5-7-3.88-7-7.94s3.07-7.44 7-7.93zm2-.01V13h6.93A8 8 0 0 1 13 19.93M13 11V4.07c3.61.45 6.48 3.33 6.93 6.93z" />
  </svg>
);

export { SvgPieChartOutline };
