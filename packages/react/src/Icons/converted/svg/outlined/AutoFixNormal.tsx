import type { SVGProps } from "react";

const SvgAutoFixNormal = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="m20 7 .94-2.06L23 4l-2.06-.94L20 1l-.94 2.06L17 4l2.06.94zM17.71 9.12l-2.83-2.83c-.2-.19-.45-.29-.71-.29s-.51.1-.71.29L2.29 17.46a.996.996 0 0 0 0 1.41l2.83 2.83c.2.2.45.3.71.3s.51-.1.71-.29l11.17-11.17c.39-.39.39-1.03 0-1.42m-3.54-.7 1.41 1.41L14.41 11 13 9.59zM5.83 19.59l-1.41-1.41L11.59 11 13 12.41z" />
  </svg>
);

export { SvgAutoFixNormal };
