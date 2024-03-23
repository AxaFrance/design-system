import type { SVGProps } from "react";

const SvgKeyboardHide = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M4 15h16V5H4zm13-9h2v2h-2zm0 3h2v2h-2zm-3-3h2v2h-2zm0 3h2v2h-2zm-3-3h2v2h-2zm0 3h2v2h-2zM8 6h2v2H8zm0 3h2v2H8zm0 3h8v2H8zM5 6h2v2H5zm0 3h2v2H5z"
      opacity={0.3}
    />
    <path d="M20 3H4c-1.1 0-1.99.9-1.99 2L2 15c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 12H4V5h16zm-9-9h2v2h-2zm0 3h2v2h-2zM8 6h2v2H8zm0 3h2v2H8zM5 9h2v2H5zm0-3h2v2H5zm3 6h8v2H8zm6-3h2v2h-2zm0-3h2v2h-2zm3 3h2v2h-2zm0-3h2v2h-2zm-5 17 4-4H8z" />
  </svg>
);

export { SvgKeyboardHide };
