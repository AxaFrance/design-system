import type { SVGProps } from "react";

const SvgDomainVerification = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="m16.6 10.88-1.42-1.42-4.24 4.25-2.12-2.13L7.4 13l3.54 3.54z" />
    <path d="M3 4v16h18V4zm16 14H5V8h14z" />
  </svg>
);

export { SvgDomainVerification };
