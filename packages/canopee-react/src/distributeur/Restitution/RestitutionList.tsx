import { ComponentPropsWithoutRef } from "react";

type RestitutionListProps = ComponentPropsWithoutRef<"ul"> & {
  values: string[];
};

export const RestitutionList = ({ values, ...props }: RestitutionListProps) => {
  return (
    <ul className="af-restitution__listul" {...props}>
      {values.map((value: string) => (
        <li key={value} className="af-restitution__listul-item">
          {value}
        </li>
      ))}
    </ul>
  );
};
