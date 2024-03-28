import type { SVGProps } from "react";

const SvgFilterAlt = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24m0 24H0" />
    <path d="M7 6h10l-5.01 6.3zm-2.75-.39C6.27 8.2 10 13 10 13v6c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-6s3.72-4.8 5.74-7.39A.998.998 0 0 0 18.95 4H5.04c-.83 0-1.3.95-.79 1.61" />
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M7 6h10l-5.01 6.3z" opacity={0.3} />
  </svg>
);

export { SvgFilterAlt };
