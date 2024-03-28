import type { SVGProps } from "react";

const SvgLabelImportant = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M4 18.99h12.04L21 12l-4.97-7H4l5 7z" />
  </svg>
);

export { SvgLabelImportant };
