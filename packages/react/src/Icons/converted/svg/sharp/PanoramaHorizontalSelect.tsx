import type { SVGProps } from "react";

const SvgPanoramaHorizontalSelect = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M12 5.5c-5.25 0-9.01-1.54-10-1.92V20.4c2.16-.76 5.21-1.9 10-1.9 4.78 0 7.91 1.17 10 1.9V3.6c-2.09.73-5.23 1.9-10 1.9" />
  </svg>
);

export { SvgPanoramaHorizontalSelect };
