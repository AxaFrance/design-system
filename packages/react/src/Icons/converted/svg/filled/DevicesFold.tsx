import type { SVGProps } from "react";

const SvgDevicesFold = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M20 3h-3c0-1.43-1.47-2.4-2.79-1.84l-3 1.29C10.48 2.76 10 3.49 10 4.29V19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16h-5.33l1.12-.48c.73-.32 1.21-1.04 1.21-1.84V5h3zM2 3h2v2H2zM2 19h2v2H2zM2 15h2v2H2zM2 11h2v2H2zM2 7h2v2H2zM6 3h2v2H6zM6 19h2v2H6z" />
  </svg>
);

export { SvgDevicesFold };
