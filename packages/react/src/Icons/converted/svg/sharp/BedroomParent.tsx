import type { SVGProps } from "react";

const SvgBedroomParent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M6.5 12h11v2h-11zM7.25 8.5h4v2h-4zM12.75 8.5h4v2h-4z" />
    <path d="M22 2H2v20h20zm-3 15h-1.5v-1.5h-11V17H5v-5l.65-.55V7H11c.37 0 .72.12 1 .32.28-.2.63-.32 1-.32h5.35v4.45L19 12z" />
  </svg>
);

export { SvgBedroomParent };
