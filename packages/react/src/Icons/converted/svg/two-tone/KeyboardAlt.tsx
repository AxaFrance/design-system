import type { SVGProps } from "react";

const SvgKeyboardAlt = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M3 19h18V6H3zM17 8h2v2h-2zm0 4h2v2h-2zm-4-4h2v2h-2zm0 4h2v2h-2zM9 8h2v2H9zm0 4h2v2H9zm-1 4h8v1H8zM5 8h2v2H5zm0 4h2v2H5z"
      opacity={0.3}
    />
    <path d="M21 4H3c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 15H3V6h18z" />
    <path d="M9 8h2v2H9zM5 8h2v2H5zM8 16h8v1H8zM13 8h2v2h-2zM9 12h2v2H9zM5 12h2v2H5zM13 12h2v2h-2zM17 8h2v2h-2zM17 12h2v2h-2z" />
  </svg>
);

export { SvgKeyboardAlt };
