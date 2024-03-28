import type { SVGProps } from "react";

const SvgKeyboardCapslock = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M12 8.41 16.59 13 18 11.59l-6-6-6 6L7.41 13zM6 18h12v-2H6z" />
  </svg>
);

export { SvgKeyboardCapslock };
