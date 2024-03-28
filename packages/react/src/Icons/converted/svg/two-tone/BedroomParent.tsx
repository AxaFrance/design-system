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
    <path
      d="M4 20h16V4H4zm1-6.83c0-.66.25-1.26.65-1.72V9c0-1.1.9-2 2-2H11c.37 0 .72.12 1 .32.28-.2.63-.32 1-.32h3.35c1.1 0 2 .9 2 2v2.45c.4.46.65 1.06.65 1.72V17h-1.5v-1.5h-11V17H5z"
      opacity={0.3}
    />
    <path d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 18H4V4h16z" />
    <path d="M6.5 15.5h11V17H19v-3.83c0-.66-.25-1.26-.65-1.72V9c0-1.1-.9-2-2-2H13c-.37 0-.72.12-1 .32-.28-.2-.63-.32-1-.32H7.65c-1.1 0-2 .9-2 2v2.45c-.4.46-.65 1.06-.65 1.72V17h1.5zm6.25-7h4v2h-4zm-5.5 0h4v2h-4zM6.5 13c0-.55.45-1 1-1h9c.55 0 1 .45 1 1v1h-11z" />
  </svg>
);

export { SvgBedroomParent };
