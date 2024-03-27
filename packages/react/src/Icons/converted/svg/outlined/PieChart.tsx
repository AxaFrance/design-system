import type { SVGProps } from "react";

const SvgPieChart = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m7.93 9H13V4.07c3.61.45 6.48 3.32 6.93 6.93M4 12c0-4.07 3.06-7.44 7-7.93v15.86c-3.94-.49-7-3.86-7-7.93m9 7.93V13h6.93A8 8 0 0 1 13 19.93" />
  </svg>
);

export { SvgPieChart };
