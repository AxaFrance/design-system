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
    <path d="M3 17h1V7H3zM20 7v10h1V7z" opacity={0.3} />
    <path d="M14 11.25h-1.5v1.5H14zm2.5 0H15v1.5h1.5zm-5 0H10v1.5h1.5zm-2.5 0H7.5v1.5H9zM21 5H3c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2M4 17H3V7h1zm14 0H6V7h12zm3 0h-1V7h1z" />
  </svg>
);

export { SvgSmartScreen };
