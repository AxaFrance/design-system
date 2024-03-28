import type { SVGProps } from "react";

const SvgFileUpload = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M9.83 8H11v6h2V8h1.17L12 5.83z" opacity={0.3} />
    <path d="M5 18h14v2H5zM5 10h4v6h6v-6h4l-7-7zm8-2v6h-2V8H9.83L12 5.83 14.17 8z" />
  </svg>
);

export { SvgFileUpload };
