import type { SVGProps } from "react";

const SvgPhotoSizeSelectSmall = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M17 19h2v2h-2zm-4 0h2v2h-2zM1 19c0 1.1.9 2 2 2h8v-6H1zM9 3h2v2H9zM5 3h2v2H5zm12 0h2v2h-2zM1 11h2v2H1zm0-4h2v2H1zm2-4C2 3 1 4 1 5h2zm10 0h2v2h-2zm8 18c1 0 2-1 2-2h-2zm0-10h2v2h-2zm0-8v2h2c0-1-1-2-2-2m0 12h2v2h-2zm0-8h2v2h-2z" />
  </svg>
);

export { SvgPhotoSizeSelectSmall };