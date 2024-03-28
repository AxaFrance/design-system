import type { SVGProps } from "react";

const SvgSmartScreen = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M1 5v14h22V5zm17 12H6V7h12z" />
    <path d="M12.5 11.25H14v1.5h-1.5zM15 11.25h1.5v1.5H15zM10 11.25h1.5v1.5H10zM7.5 11.25H9v1.5H7.5z" />
  </svg>
);

export { SvgSmartScreen };
