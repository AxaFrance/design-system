import type { SVGProps } from "react";

const SvgArrowRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="m10 17 5-5-5-5z" />
    <path fill="none" d="M0 24V0h24v24z" />
  </svg>
);

export { SvgArrowRight };
