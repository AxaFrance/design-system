import type { SVGProps } from "react";

const SvgChromeReaderMode = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M13 12h7v1.5h-7zm0-2.5h7V11h-7zm0 5h7V16h-7zM23 4H1v17h22zm-2 15h-9V6h9z" />
  </svg>
);

export { SvgChromeReaderMode };
