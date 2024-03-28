import type { SVGProps } from "react";

const SvgForum = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M22 6h-3v9H6v3h12l4 4zm-5 7V2H2v15l4-4z" />
  </svg>
);

export { SvgForum };
