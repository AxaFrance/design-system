import type { SVGProps } from "react";

const SvgCelebration = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="m2 22 14-5-9-9zM14.53 12.53 21 6.05l1.48 1.48 1.06-1.06L21 3.93l-7.53 7.53zM10.94 6 9.47 7.47l1.06 1.06 2.54-2.54-2.54-2.53-1.06 1.07zM18.97 9.97l-3.5 3.5 1.06 1.06L19 12.06l2.5 2.49 1.06-1.06z" />
    <path d="m15.97 4.97-4.5 4.5 1.06 1.06L18.07 5l-3.53-3.53-1.06 1.06z" />
  </svg>
);

export { SvgCelebration };
