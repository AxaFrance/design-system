import type { SVGProps } from "react";

const SvgFiberManualRecord = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <circle cx={12} cy={12} r={8} />
  </svg>
);

export { SvgFiberManualRecord };
