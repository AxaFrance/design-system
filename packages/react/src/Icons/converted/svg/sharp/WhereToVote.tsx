import type { SVGProps } from "react";

const SvgWhereToVote = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7m-1.53 12-3.48-3.48L8.4 9.1l2.07 2.07 5.13-5.14 1.41 1.42z" />
  </svg>
);

export { SvgWhereToVote };
