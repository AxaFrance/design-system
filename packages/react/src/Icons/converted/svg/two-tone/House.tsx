import type { SVGProps } from "react";

const SvgHouse = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M7 10.19V18h2v-6h6v6h2v-7.81l-5-4.5zm7-.19h-4c0-1.1.9-2 2-2s2 .9 2 2"
      opacity={0.3}
    />
    <path d="M19 9.3V4h-3v2.6L12 3 2 12h3v8h6v-6h2v6h6v-8h3zM17 18h-2v-6H9v6H7v-7.81l5-4.5 5 4.5z" />
    <path d="M10 10h4c0-1.1-.9-2-2-2s-2 .9-2 2" />
  </svg>
);

export { SvgHouse };
