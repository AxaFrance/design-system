import type { SVGProps } from "react";

const SvgNoPhotography = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M10.94 8.12 7.48 4.66 9 3h6l1.83 2H22v14.17l-5.12-5.12Q17 13.54 17 13c0-2.76-2.24-5-5-5-.36 0-.71.04-1.06.12m9.55 15.19L18.17 21H2V5h.17L.69 3.51 2.1 2.1 21 21l.9.9zm-6-5.99-1.5-1.5c-.32.1-.64.18-.99.18-1.66 0-3-1.34-3-3 0-.35.08-.67.19-.98l-1.5-1.5A4.74 4.74 0 0 0 7 13c0 2.76 2.24 5 5 5 .91 0 1.76-.25 2.49-.68" />
  </svg>
);

export { SvgNoPhotography };
