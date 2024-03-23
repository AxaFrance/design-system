import type { SVGProps } from "react";

const SvgVideoStable = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2M4 18V6h2.95l-2.33 8.73L16.82 18zm11.62-2.39-8.55-2.29L8.38 8.4l8.56 2.29zM20 18h-2.95l2.34-8.73L7.18 6H20z" />
  </svg>
);

export { SvgVideoStable };
