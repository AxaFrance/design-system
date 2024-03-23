import type { SVGProps } from "react";

const SvgSecurity = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M12 3.19 5 6.3V12h7v8.93c3.72-1.15 6.47-4.82 7-8.94h-7z"
      opacity={0.3}
    />
    <path d="M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5zm0 19.93V12H5V6.3l7-3.11v8.8h7c-.53 4.12-3.28 7.79-7 8.94" />
  </svg>
);

export { SvgSecurity };
