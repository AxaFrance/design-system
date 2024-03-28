import type { SVGProps } from "react";

const SvgFormatSize = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M9 4v3h5v12h3V7h5V4zm-6 8h3v7h3v-7h3V9H3z" />
  </svg>
);

export { SvgFormatSize };
