import type { SVGProps } from "react";

const Svg123 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M7 15H5.5v-4.5H4V9h3zm6.5-1.5h-3v-1h3V9H9v1.5h3v1H9V15h4.5zm6 1.5V9H15v1.5h3v1h-2v1h2v1h-3V15z" />
  </svg>
);

export { Svg123 };
