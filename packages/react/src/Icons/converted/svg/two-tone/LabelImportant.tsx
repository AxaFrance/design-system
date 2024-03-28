import type { SVGProps } from "react";

const SvgLabelImportant = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M15 7H7.89l3.57 5-3.57 5H15l3.55-5z" opacity={0.3} />
    <path d="M16.63 5.84C16.27 5.33 15.67 5 15 5H4l5 7-5 6.99h11c.67 0 1.27-.32 1.63-.83L21 12zM15 17H7.89l3.57-5-3.57-5H15l3.55 5z" />
  </svg>
);

export { SvgLabelImportant };
