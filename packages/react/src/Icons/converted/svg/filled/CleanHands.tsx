import type { SVGProps } from "react";

const SvgCleanHands = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="m16.99 5 .63 1.37 1.37.63-1.37.63L16.99 9l-.63-1.37L14.99 7l1.37-.63zM11 6.13V4h2c.57 0 1.1.17 1.55.45l1.43-1.43A4.9 4.9 0 0 0 13 2H7.5v2H9v2.14A5.01 5.01 0 0 0 5.26 9.5h3.98L15 11.65v-.62a5 5 0 0 0-4-4.9M1 22h4V11H1zm19-5h-7l-2.09-.73.33-.94L13 16h2.82c.65 0 1.18-.53 1.18-1.18 0-.49-.31-.93-.77-1.11L8.97 11H7v9.02L14 22l8-3c-.01-1.1-.89-2-2-2m0-3c1.1 0 2-.9 2-2s-2-4-2-4-2 2.9-2 4 .9 2 2 2" />
  </svg>
);

export { SvgCleanHands };
