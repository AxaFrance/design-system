import type { SVGProps } from "react";

const SvgGeneratingTokens = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M9 4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8m0 11.5c-.55 0-1-.45-1-1v-4H6.75c-.41 0-.75-.34-.75-.75S6.34 9 6.75 9h4.5c.41 0 .75.34.75.75s-.34.75-.75.75H10v4c0 .55-.45 1-1 1M20.25 3.75l1.75.79a.5.5 0 0 1 0 .91l-1.75.79L19.46 8a.5.5 0 0 1-.91 0l-.79-1.75L16 5.46a.5.5 0 0 1 0-.91l1.75-.79.79-1.76a.5.5 0 0 1 .91 0zm0 14 1.75.79a.5.5 0 0 1 0 .91l-1.75.79-.79 1.76a.5.5 0 0 1-.91 0l-.79-1.75-1.76-.79a.5.5 0 0 1 0-.91l1.75-.79.79-1.76a.5.5 0 0 1 .91 0z" />
  </svg>
);

export { SvgGeneratingTokens };
