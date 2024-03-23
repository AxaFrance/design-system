import type { SVGProps } from "react";

const SvgMonitorWeight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M13 8.5h1v1h-1zM10 8.5h1v1h-1zM11.5 8.5h1v1h-1z" opacity={0.3} />
    <path
      d="M5 19h14V5H5zm7-13c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3"
      opacity={0.3}
    />
    <path d="M12 12c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3m1-3.5h1v1h-1zm-1.5 0h1v1h-1zm-1.5 0h1v1h-1z" />
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V5h14z" />
  </svg>
);

export { SvgMonitorWeight };
