import type { SVGProps } from "react";

const SvgScreenRotation = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M16.48 2.52c3.27 1.55 5.61 4.72 5.97 8.48h1.5C23.44 4.84 18.29 0 12 0l-.66.03 3.81 3.81zM7.52 21.48A10.49 10.49 0 0 1 1.55 13H.05C.56 19.16 5.71 24 12 24l.66-.03-3.81-3.81zM9.17.69.69 9.17l14.14 14.14 8.48-8.48zm5.66 20.5L2.81 9.17l6.36-6.36 12.02 12.02z" />
  </svg>
);

export { SvgScreenRotation };
