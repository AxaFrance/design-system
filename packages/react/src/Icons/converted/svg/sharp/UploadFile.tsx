import type { SVGProps } from "react";

const SvgUploadFile = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M14 2H4v20h16V8zm-1 13v4h-2v-4H8l4.01-4L16 15zm0-6V3.5L18.5 9z" />
  </svg>
);

export { SvgUploadFile };
