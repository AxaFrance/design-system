import type { SVGProps } from "react";

const SvgApproval = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M6 16h12v2H6zM12 4c-1.66 0-3 1.34-3 3l3 4 3-4c0-1.66-1.34-3-3-3"
      opacity={0.3}
    />
    <path d="M12 2C9.24 2 7 4.24 7 7l5 7 5-7c0-2.76-2.24-5-5-5m0 9L9 7c0-1.66 1.34-3 3-3s3 1.34 3 3zM18 14H6c-1.1 0-2 .9-2 2v6h16v-6c0-1.1-.9-2-2-2m0 4H6v-2h12z" />
  </svg>
);

export { SvgApproval };
