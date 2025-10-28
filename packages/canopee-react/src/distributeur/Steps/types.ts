import { ReactNode } from "react";

export type CustomClickEvent = {
  href: string;
  number?: ReactNode;
  id: string;
  title: string;
};

export type VerticalStepMode = "edited" | "locked" | "validated";
