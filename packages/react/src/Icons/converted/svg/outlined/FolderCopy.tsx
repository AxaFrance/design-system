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
    <path d="M3 19h17v2H3c-1.1 0-2-.9-2-2V6h2zM23 6v9c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2l.01-11c0-1.1.89-2 1.99-2h5l2 2h7c1.1 0 2 .9 2 2M7 15h14V6h-7.83l-2-2H7z" />
  </svg>
);

export { SvgFolderCopy };
