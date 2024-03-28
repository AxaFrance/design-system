import type { SVGProps } from "react";

const SvgPhoneAndroid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M19 1H5v22h14zm-5 20h-4v-1h4zm3-3H7V4h10z" />
  </svg>
);

export { SvgPhoneAndroid };
