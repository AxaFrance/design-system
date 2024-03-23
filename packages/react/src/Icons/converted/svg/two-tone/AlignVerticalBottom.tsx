import type { SVGProps } from "react";

const SvgAlignVerticalBottom = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M22 22H2v-2h20zM10 2H7v16h3zm7 6h-3v10h3z" />
  </svg>
);

export { SvgAlignVerticalBottom };
