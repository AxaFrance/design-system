import type { SVGProps } from "react";

const SvgWifiLock = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M21.98 11 24 8.98A16.88 16.88 0 0 0 12 4C7.31 4 3.07 5.9 0 8.98l6.35 6.36L12 21l3.05-3.05V15c0-.45.09-.88.23-1.29.54-1.57 2.01-2.71 3.77-2.71z" />
    <path d="M22 15.11c0-1-.68-1.92-1.66-2.08-.12-.02-.24-.02-.36-.02h-.01c-1.09.02-1.97.9-1.97 1.99v1h-1v5h6v-5h-1zM21 16h-2v-1c0-.55.45-1 1-1s1 .45 1 1z" />
  </svg>
);

export { SvgWifiLock };
