import type { SVGProps } from "react";

const SvgNoFlash = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M2.45 2.45 1.04 3.87l5.3 5.3-.2.23H2V22h16v-1.17l2.13 2.13 1.41-1.41zM10 20c-2.21 0-4-1.79-4-4 0-1.95 1.4-3.57 3.25-3.92l1.57 1.57c-.26-.09-.53-.15-.82-.15a2.5 2.5 0 0 0 0 5 2.5 2.5 0 0 0 2.5-2.5c0-.29-.06-.56-.15-.82l1.57 1.57A3.99 3.99 0 0 1 10 20m8-4.83L10.83 8h1.75l1.28 1.4H18zm2.4-9.57H22L19 11V7h-1V2h4z" />
    <path fill="none" d="M0 0h24v24H0z" />
  </svg>
);

export { SvgNoFlash };
