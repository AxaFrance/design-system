import type { SVGProps } from "react";

const SvgHdrAuto = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M12.04 8.04h-.09l-1.6 4.55h3.29z" />
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m3 14.41-.78-2.22H9.78l-.79 2.22c-.12.35-.46.59-.83.59a.887.887 0 0 1-.83-1.2l3.34-8.88C10.88 6.37 11.4 6 12 6c.59 0 1.12.37 1.33.92l3.34 8.88c.22.58-.21 1.2-.83 1.2-.38 0-.72-.24-.84-.59" />
  </svg>
);

export { SvgHdrAuto };
