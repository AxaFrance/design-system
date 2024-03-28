import type { SVGProps } from "react";

const SvgPublish = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M5 4v2h14V4zm0 10h4v6h6v-6h4l-7-7z" />
  </svg>
);

export { SvgPublish };
