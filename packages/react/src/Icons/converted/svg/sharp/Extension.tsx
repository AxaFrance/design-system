import type { SVGProps } from "react";

const SvgExtension = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M20.36 11H19V5h-6V3.64c0-1.31-.94-2.5-2.24-2.63A2.5 2.5 0 0 0 8 3.5V5H2.01v5.8H3.4c1.31 0 2.5.88 2.75 2.16.33 1.72-.98 3.24-2.65 3.24H2V22h5.8v-1.4c0-1.31.88-2.5 2.16-2.75 1.72-.33 3.24.98 3.24 2.65V22H19v-6h1.5a2.5 2.5 0 0 0 2.49-2.76c-.13-1.3-1.33-2.24-2.63-2.24" />
  </svg>
);

export { SvgExtension };
