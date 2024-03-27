import type { SVGProps } from "react";

const SvgSwipeDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M3.8 12.18c-.2-.86-.3-1.76-.3-2.68 0-2.84.99-5.45 2.63-7.5L7.2 3.07a10.46 10.46 0 0 0-1.88 8.99l1.62-1.62L8 11.5 4.5 15 1 11.5l1.06-1.06zM21.71 11.18l2.09 7.39-8.23 3.65-6.84-2.85.61-1.62 3.8-.75-4.35-9.83c-.34-.76 0-1.64.76-1.98s1.64 0 1.98.76l2.43 5.49 1.26-.56z" />
  </svg>
);

export { SvgSwipeDown };
