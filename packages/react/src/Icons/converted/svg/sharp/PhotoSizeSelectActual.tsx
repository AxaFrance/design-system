import type { SVGProps } from "react";

const SvgPhotoSizeSelectActual = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M23 3H1v18h22zM5 17l3.5-4.5 2.5 3.01L14.5 11l4.5 6z" />
  </svg>
);

export { SvgPhotoSizeSelectActual };
