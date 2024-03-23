import type { SVGProps } from "react";

const SvgDoneOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="m19.77 5.03 1.4 1.4L8.43 19.17l-5.6-5.6 1.4-1.4 4.2 4.2zm0-2.83L8.43 13.54l-4.2-4.2L0 13.57 8.43 22 24 6.43z" />
  </svg>
);

export { SvgDoneOutline };
