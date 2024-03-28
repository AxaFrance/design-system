import type { SVGProps } from "react";

const SvgSpellcheck = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M13.12 16c.69 0 1.15-.69.9-1.32L9.77 3.87a1.363 1.363 0 0 0-2.54 0L2.98 14.68c-.25.63.22 1.32.9 1.32.4 0 .76-.25.91-.63L5.67 13h5.64l.9 2.38c.15.37.51.62.91.62m-6.69-5L8.5 5.48 10.57 11zm14.46 1.29-7.39 7.39-2.97-2.97a.996.996 0 1 0-1.41 1.41l3.68 3.68c.39.39 1.02.39 1.41 0l8.08-8.09a.996.996 0 0 0 0-1.41.993.993 0 0 0-1.4-.01" />
  </svg>
);

export { SvgSpellcheck };
