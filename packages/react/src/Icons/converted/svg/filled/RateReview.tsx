import type { SVGProps } from "react";

const SvgRateReview = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="none"
      d="M0 0h24v24H0zm15.35 6.41-1.77-1.77c-.2-.2-.51-.2-.71 0L6 11.53V14h2.47l6.88-6.88c.2-.19.2-.51 0-.71"
    />
    <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2M6 14v-2.47l6.88-6.88c.2-.2.51-.2.71 0l1.77 1.77c.2.2.2.51 0 .71L8.47 14zm12 0h-7.5l2-2H18z" />
  </svg>
);

export { SvgRateReview };
