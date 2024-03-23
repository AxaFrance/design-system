import type { SVGProps } from "react";

const SvgStroller = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M18 20c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2M6 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2M22 7v-.52C22 4.56 20.52 3 18.65 3c-1.66 0-2.54 1.27-3.18 2.03L5.27 17H17V6.27c.58-.68.97-1.27 1.65-1.27.77 0 1.35.66 1.35 1.48V7zm-7.7-2.9a8.962 8.962 0 0 0-9.58.62l4.89 4.89z" />
  </svg>
);

export { SvgStroller };
