import type { SVGProps } from "react";

const SvgChromeReaderMode = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M-74 29h48v48h-48zM0 0h24v24H0zm0 0h24v24H0z" />
    <path d="M13 12h7v1.5h-7zm0-2.5h7V11h-7zm0 5h7V16h-7zM21 4H3c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 15h-9V6h9z" />
  </svg>
);

export { SvgChromeReaderMode };
