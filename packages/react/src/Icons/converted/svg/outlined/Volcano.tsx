import type { SVGProps } from "react";

const SvgVolcano = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M18 8h-7l-2 5H6l-4 9h20zM7.3 15h3.05l.5-1.26 1.5-3.74h4.14l2.86 10H5.08zM13 1h2v4h-2zM16.121 5.468 18.95 2.64l1.414 1.414-2.829 2.828zM7.64 4.05l1.414-1.414 2.828 2.829-1.414 1.414z" />
  </svg>
);

export { SvgVolcano };
