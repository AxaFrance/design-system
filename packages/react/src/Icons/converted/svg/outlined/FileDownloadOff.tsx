import type { SVGProps } from "react";

const SvgFileDownloadOff = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M18 15.17V15h2v2.17zm-2.59-2.58L17 11l-1.41-1.41L14 11.17zM13 10.17V4h-2v4.17zm8.19 11.02-1.78-1.78-16.6-16.6-1.42 1.41 6.19 6.19L7 11l5 5 .59-.59L15.17 18H6v-3H4v3c0 1.1.9 2 2 2h11.17l2.61 2.61z" />
  </svg>
);

export { SvgFileDownloadOff };
