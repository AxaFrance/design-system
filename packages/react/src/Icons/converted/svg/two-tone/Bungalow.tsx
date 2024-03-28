import type { SVGProps } from "react";

const SvgBungalow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="m12 6.78-3 4.8V19h2v-3h2v3h2v-7.42zM13 14h-2v-2h2z"
      opacity={0.3}
    />
    <path d="M13 14h-2v-2h2zm5.1 2.56L17 14.79V21H7v-6.2l-1.1 1.76-1.7-1.06L12 3l7.8 12.5zM15 11.59l-3-4.8-3 4.8V19h2v-3h2v3h2z" />
  </svg>
);

export { SvgBungalow };
