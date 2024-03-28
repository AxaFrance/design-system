import type { SVGProps } from "react";

const SvgMedicationLiquid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <g opacity={0.3}>
      <defs>
        <path id="medication_liquid_svg__a" d="M4 8h10v11H4z" opacity={0.3} />
      </defs>
      <use xlinkHref="#medication_liquid_svg__a" overflow="visible" />
      <clipPath id="medication_liquid_svg__b">
        <use xlinkHref="#medication_liquid_svg__a" overflow="visible" />
      </clipPath>
      <path
        d="M4 19h10V8H4zm1-7h2.5V9.5h3V12H13v3h-2.5v2.5h-3V15H5z"
        clipPath="url(#medication_liquid_svg__b)"
      />
    </g>
    <path d="M3 3h12v2H3zM14 6H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2m0 13H4V8h10z" />
    <path d="M7.5 17.5h3V15H13v-3h-2.5V9.5h-3V12H5v3h2.5z" />
    <ellipse cx={20} cy={10} opacity={0.3} rx={1} ry={2} />
    <path d="M20 6c-1.68 0-3 1.76-3 4 0 1.77.83 3.22 2 3.76V20c0 .55.45 1 1 1s1-.45 1-1v-6.24c1.17-.54 2-1.99 2-3.76 0-2.24-1.32-4-3-4m0 6c-.41 0-1-.78-1-2s.59-2 1-2 1 .78 1 2-.59 2-1 2" />
  </svg>
);

export { SvgMedicationLiquid };
