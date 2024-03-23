import type { SVGProps } from "react";

const SvgDeck = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M12 4.44 8.34 7h7.32z" opacity={0.3} />
    <path d="M22 9 12 2 2 9h9v13h2V9zM12 4.44 15.66 7H8.34z" />
    <path d="m4.14 12-1.96.37.82 4.37V22h2l.02-4H7v4h2v-6H4.9zM19.1 16H15v6h2v-4h1.98l.02 4h2v-5.26l.82-4.37-1.96-.37z" />
  </svg>
);

export { SvgDeck };
