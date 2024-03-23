import type { SVGProps } from "react";

const SvgNavigation = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M12 2 4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" />
  </svg>
);

export { SvgNavigation };
