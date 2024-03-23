import type { SVGProps } from "react";

const SvgAttribution = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8m-2.75-5.5h1.5V19h2.5v-4.5h1.5v-6h-5.5z" />
    <circle cx={12} cy={6.5} r={1.5} />
  </svg>
);

export { SvgAttribution };
