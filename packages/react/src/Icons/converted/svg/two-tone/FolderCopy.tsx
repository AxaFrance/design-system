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
    <path d="M11.17 4H7v11h14V6h-7.83z" opacity={0.3} />
    <path d="M21 4h-7l-2-2H7c-1.1 0-1.99.9-1.99 2L5 15c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 11H7V4h4.17l2 2H21z" />
    <path d="M3 6H1v13c0 1.1.9 2 2 2h17v-2H3z" />
  </svg>
);

export { SvgFolderCopy };
