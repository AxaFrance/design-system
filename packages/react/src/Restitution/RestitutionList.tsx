import { ComponentPropsWithoutRef } from "react";

type RestitutionListProps = ComponentPropsWithoutRef<"ul"> & {
  values: string[];
};

export const RestitutionList = ({ values, ...props }: RestitutionListProps) => {
  const li = values.map((value: string) => (
    <li key={value} className="af-restitution__listul-item">
      {value}
    </li>
  ));

  return (
    <ul className="af-restitution__listul" {...props}>
      {li}
    </ul>
  );
};
