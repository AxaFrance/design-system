import type { SVGProps } from "react";

const SvgContentPasteSearch = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M10 16.5c0-3.58 2.92-6.5 6.5-6.5.89 0 1.73.18 2.5.5V5h-2v3H7V5H5v14h5.5c-.32-.77-.5-1.61-.5-2.5"
      opacity={0.3}
    />
    <path d="M10.5 19H5V5h2v3h10V5h2v5.5c.75.31 1.42.76 2 1.32V5c0-1.1-.9-2-2-2h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h6.82a6.6 6.6 0 0 1-1.32-2M12 3c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1" />
    <path d="M20.3 18.9c.4-.7.7-1.5.7-2.4 0-2.5-2-4.5-4.5-4.5S12 14 12 16.5s2 4.5 4.5 4.5c.9 0 1.7-.3 2.4-.7l2.7 2.7 1.4-1.4zm-3.8.1c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5" />
  </svg>
);

export { SvgContentPasteSearch };
