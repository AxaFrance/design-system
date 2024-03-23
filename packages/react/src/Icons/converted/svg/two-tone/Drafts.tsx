import type { SVGProps } from "react";

const SvgDrafts = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="m12 15.36-8-5.02V18h16l-.01-7.63z" opacity={0.3} />
    <path d="M21.99 8c0-.72-.37-1.35-.94-1.7L12 1 2.95 6.3C2.38 6.65 2 7.28 2 8v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2zM12 3.32 19.99 8v.01L12 13 4 8zM4 18v-7.66l8 5.02 7.99-4.99L20 18z" />
  </svg>
);

export { SvgDrafts };
