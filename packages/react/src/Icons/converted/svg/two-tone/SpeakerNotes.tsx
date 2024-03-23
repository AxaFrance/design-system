import type { SVGProps } from "react";

const SvgSpeakerNotes = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="m4 17.17.59-.59.58-.58H20V4H4zM10 6h8v2h-8zm0 3h8v2h-8zm0 3h5v2h-5zM6 6h2v2H6zm0 3h2v2H6zm0 3h2v2H6z"
      opacity={0.3}
    />
    <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 14H5.17l-.59.59-.58.58V4h16zM6 12h2v2H6zm0-3h2v2H6zm0-3h2v2H6zm4 6h5v2h-5zm0-3h8v2h-8zm0-3h8v2h-8z" />
  </svg>
);

export { SvgSpeakerNotes };
