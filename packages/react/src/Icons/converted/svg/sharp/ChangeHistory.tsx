import type { SVGProps } from "react";

const SvgChangeHistory = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M12 7.77 18.39 18H5.61zM12 4 2 20h20z" />
  </svg>
);

export { SvgChangeHistory };
