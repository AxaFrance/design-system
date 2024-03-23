import type { SVGProps } from "react";

const SvgFormatQuote = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M5 17h3l2-4V7H4v6h3zm10 0h3l2-4V7h-6v6h3z" />
  </svg>
);

export { SvgFormatQuote };
