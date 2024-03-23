import type { SVGProps } from "react";

const SvgDirections = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="m3.01 12 9 9L21 12l-9-9zM14 7.5l3.5 3.5-3.5 3.5V12h-4v3H8v-4c0-.55.45-1 1-1h5z"
      opacity={0.3}
    />
    <path d="M13.42 1.58c-.75-.75-2.07-.76-2.83 0l-9 9c-.78.78-.78 2.04 0 2.82l9 9c.39.39.9.58 1.41.58s1.02-.19 1.41-.58l8.99-8.99c.78-.76.79-2.03.02-2.82zm-1.41 19.41-9-9 9-9 9 9zM8 11v4h2v-3h4v2.5l3.5-3.5L14 7.5V10H9c-.55 0-1 .45-1 1" />
  </svg>
);

export { SvgDirections };
