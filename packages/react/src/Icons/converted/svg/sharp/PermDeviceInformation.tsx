import type { SVGProps } from "react";

const SvgPermDeviceInformation = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M13 7h-2v2h2zm0 4h-2v6h2zM5 1v22h14V1zm12 18H7V5h10z" />
  </svg>
);

export { SvgPermDeviceInformation };
