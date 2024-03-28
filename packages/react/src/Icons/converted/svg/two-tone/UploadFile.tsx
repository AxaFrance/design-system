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
    <path d="M13 4H6v16h12V9h-5zm3 11h-3v4h-2v-4H8l4.01-4z" opacity={0.3} />
    <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8zm4 18H6V4h7v5h5z" />
    <path d="M8 15h3v4h2v-4h3l-3.99-4z" />
  </svg>
);

export { SvgUploadFile };
