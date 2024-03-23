import type { SVGProps } from "react";

const SvgManageSearch = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M2 12h5v2H2zM18.17 13.75c.52-.79.83-1.73.83-2.75 0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.02 0 1.96-.31 2.76-.83L20.59 19 22 17.59zM14 14c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3M2 7h5v2H2zM2 17h10v2H2z" />
  </svg>
);

export { SvgManageSearch };
