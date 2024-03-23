import type { SVGProps } from "react";

const SvgDriveFolderUpload = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M22 6H12l-2-2H2v16h20zm-9 7v4h-2v-4H8l4.01-4L16 13z" />
  </svg>
);

export { SvgDriveFolderUpload };
