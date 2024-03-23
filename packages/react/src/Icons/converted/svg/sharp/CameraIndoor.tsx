import type { SVGProps } from "react";

const SvgCameraIndoor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M12 3 4 9v12h16V9zm4 13.06L14 15v2H8v-6h6v2l2-1.06z" />
  </svg>
);

export { SvgCameraIndoor };
