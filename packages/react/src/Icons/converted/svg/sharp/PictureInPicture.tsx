import type { SVGProps } from "react";

const SvgPictureInPicture = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M19 7h-8v6h8zm4-4H1v17.98h22zm-2 16.01H3V4.98h18z" />
  </svg>
);

export { SvgPictureInPicture };
