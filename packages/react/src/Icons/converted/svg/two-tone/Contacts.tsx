import type { SVGProps } from "react";

const SvgContacts = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M20 6H4v12h16zm-8 1a2.5 2.5 0 0 1 0 5 2.5 2.5 0 0 1 0-5m5 10H7v-1.01C7 13.9 10.31 13 12 13s5 .9 5 2.99z"
      opacity={0.3}
    />
    <path d="M4 20h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2M4 6h16v12H4zm0-6h16v2H4zm0 22h16v2H4zm8-10a2.5 2.5 0 0 0 0-5 2.5 2.5 0 0 0 0 5m0-3.5c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1m0 4.5c-1.69 0-5 .9-5 2.99V17h10v-1.01C17 13.9 13.69 13 12 13m-3.19 2.5c.61-.52 2.03-1 3.19-1 1.17 0 2.59.48 3.2 1z" />
  </svg>
);

export { SvgContacts };
