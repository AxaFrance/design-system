import type { SVGProps } from "react";

const SvgSpeakerNotesOff = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M1.27 1.73 0 3l2.01 2.01L2 22l4-4h9l5.73 5.73L22 22.46zM8 14H6v-2h2zm-2-3V9l2 2zm16-9H4.08L10 7.92V6h8v2h-7.92l1 1H18v2h-4.92l6.99 6.99H22z" />
  </svg>
);

export { SvgSpeakerNotesOff };
