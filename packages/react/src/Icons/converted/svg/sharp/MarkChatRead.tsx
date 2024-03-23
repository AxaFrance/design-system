import type { SVGProps } from "react";

const SvgMarkChatRead = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M12.03 17.5c-.02.17-.03.33-.03.5H6l-4 4V2h20v8.68A6.995 6.995 0 0 0 12 17c0 .17.01.33.03.5M23 14.34l-1.41-1.41-4.24 4.24-2.12-2.12-1.41 1.41L17.34 20z" />
  </svg>
);

export { SvgMarkChatRead };
