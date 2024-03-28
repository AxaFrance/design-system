import type { SVGProps } from "react";

const SvgScreenLockRotation = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M7.52 21.48A10.49 10.49 0 0 1 1.55 13H.05C.56 19.16 5.71 24 12 24l.66-.03-3.81-3.82zM20.05 4v-.36c0-1.31-.94-2.5-2.24-2.63a2.5 2.5 0 0 0-2.76 2.49V4h-1v6h7V4zm-.8 0h-3.4v-.5c0-.94.76-1.7 1.7-1.7s1.7.76 1.7 1.7zm.48 7.2-1.41 1.41 2.22 2.22-5.66 5.66L3.56 9.17l5.66-5.66 2.1 2.1 1.41-1.41L9.22.69.74 9.17l14.14 14.14 8.48-8.48z" />
  </svg>
);

export { SvgScreenLockRotation };
