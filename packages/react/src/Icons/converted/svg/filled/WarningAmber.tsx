import type { SVGProps } from "react";

const SvgWarningAmber = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M12 5.99 19.53 19H4.47zM12 2 1 21h22z" />
    <path d="M13 16h-2v2h2zM13 10h-2v5h2z" />
  </svg>
);

export { SvgWarningAmber };
