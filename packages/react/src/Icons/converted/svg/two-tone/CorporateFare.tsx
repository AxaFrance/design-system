import type { SVGProps } from "react";

const SvgCorporateFare = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M10 19H4v-2h6zm0-4H4v-2h6zm0-4H4V9h6zm0-4H4V5h6zm10 12h-8V9h8zm-2-8h-4v2h4zm0 4h-4v2h4z"
      opacity={0.3}
    />
    <path d="M12 7V3H2v18h20V7zm-2 12H4v-2h6zm0-4H4v-2h6zm0-4H4V9h6zm0-4H4V5h6zm10 12h-8V9h8zm-2-8h-4v2h4zm0 4h-4v2h4z" />
  </svg>
);

export { SvgCorporateFare };
