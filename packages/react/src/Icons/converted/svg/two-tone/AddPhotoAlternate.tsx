import type { SVGProps } from "react";

const SvgAddPhotoAlternate = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="m10.21 16.83-1.96-2.36L5.5 18h11l-3.54-4.71z" />
    <path
      d="M16.5 18h-11l2.75-3.53 1.96 2.36 2.75-3.54zM17 7h-3V6H4v14h14V10h-1z"
      opacity={0.3}
    />
    <path d="M20 4V1h-2v3h-3v2h3v2.99h2V6h3V4zm-2 16H4V6h10V4H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V10h-2z" />
  </svg>
);

export { SvgAddPhotoAlternate };
