import type { SVGProps } from "react";

const SvgFolderCopy = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M3 6H1v15h19v-2H3z" />
    <path d="M23 4h-9l-2-2H5.01L5 17h18z" />
  </svg>
);

export { SvgFolderCopy };
