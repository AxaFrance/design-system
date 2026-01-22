import { ReactNode } from "react";

export type CustomClickEvent = {
  href: string;
  number?: ReactNode;
  id: string;
  title: string;
};

export type StepLinkOnClickHandler = (e: CustomClickEvent) => void;

export type StepMode = "link" | "active" | "disabled";
export type VerticalStepMode = "edited" | "locked" | "validated";
