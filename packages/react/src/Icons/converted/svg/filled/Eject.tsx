import type { SVGProps } from "react";

const SvgEject = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 24V0h24v24z" />
    <path d="M5 17h14v2H5zm7-12L5.33 15h13.34z" />
  </svg>
);

export { SvgEject };
