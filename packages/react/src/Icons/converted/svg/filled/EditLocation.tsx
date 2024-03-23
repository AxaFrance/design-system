import type { SVGProps } from "react";

const SvgEditLocation = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7m-1.56 10H9v-1.44l3.35-3.34 1.43 1.43zm4.45-4.45-.7.7-1.44-1.44.7-.7a.38.38 0 0 1 .54 0l.9.9c.15.15.15.39 0 .54" />
  </svg>
);

export { SvgEditLocation };
