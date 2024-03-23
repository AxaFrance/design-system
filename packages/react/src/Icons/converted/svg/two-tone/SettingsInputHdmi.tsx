import type { SVGProps } from "react";

const SvgSettingsInputHdmi = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M8 9H7v3.53l2.79 5.58.21.42V20h4v-1.47l.21-.42L17 12.53V9h-1z"
      opacity={0.3}
    />
    <path d="M18 7V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v3H5v6l3 6v3h8v-3l3-6V7zM8 4h8v3h-2.01V5h-1v2H11V5h-1v2H8zm9 8.53-3 6V20h-4v-1.47l-3-6V9h10z" />
  </svg>
);

export { SvgSettingsInputHdmi };
