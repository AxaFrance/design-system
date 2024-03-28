import type { SVGProps } from "react";

const SvgPublish = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M9.83 12H11v6h2v-6h1.17L12 9.83z" opacity={0.3} />
    <path d="M5 4h14v2H5zm7 3-7 7h4v6h6v-6h4zm1 5v6h-2v-6H9.83L12 9.83 14.17 12z" />
  </svg>
);

export { SvgPublish };
