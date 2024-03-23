import type { SVGProps } from "react";

const SvgWaterDamage = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="m12 5.69-5 4.5V18h10v-7.81zM12 16c-1.1 0-2-.9-2-2s2-4 2-4 2 2.9 2 4-.9 2-2 2"
      opacity={0.3}
    />
    <path d="M12 3 2 12h3v8h14v-8h3zM7 18v-7.81l5-4.5 5 4.5V18zm7-4c0 1.1-.9 2-2 2s-2-.9-2-2 2-4 2-4 2 2.9 2 4" />
  </svg>
);

export { SvgWaterDamage };
