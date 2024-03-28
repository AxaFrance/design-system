import type { SVGProps } from "react";

const SvgAccountTree = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M22 11V3h-7v3H9V3H2v8h7V8h2v10h4v3h7v-8h-7v3h-2V8h2v3zM7 9H4V5h3zm10 6h3v4h-3zm0-10h3v4h-3z" />
    <path d="M7 5v4H4V5zM20 5v4h-3V5zM20 15v4h-3v-4z" opacity={0.3} />
  </svg>
);

export { SvgAccountTree };
