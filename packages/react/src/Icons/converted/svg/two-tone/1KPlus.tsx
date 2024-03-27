import type { SVGProps } from "react";

const Svg1KPlus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M5 19h14v-6.5h-1.5V14h-1v-1.5H15v-1h1.5V10h1v1.5H19V5H5zm5.5-10H12v2.25L13.75 9h1.75l-2.25 3 2.25 3h-1.75L12 12.75V15h-1.5zM6 9h3v6H7.5v-4.5H6z"
      opacity={0.3}
    />
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 8.5h-1.5V10h-1v1.5H15v1h1.5V14h1v-1.5H19V19H5V5h14z" />
    <path d="M7.5 15H9V9H6v1.5h1.5zM12 12.75 13.75 15h1.75l-2.25-3 2.25-3h-1.75L12 11.25V9h-1.5v6H12z" />
  </svg>
);

export { Svg1KPlus };
