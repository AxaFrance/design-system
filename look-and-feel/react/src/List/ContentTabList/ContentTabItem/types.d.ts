import type { ComponentProps, ReactNode } from "react";
import { Tag } from "../../..";

export type TContentTabItem = {
  id?: string;
  title: string;
  subtitle?: string;
  tag?: string;
  tagProps?: ComponentProps<typeof Tag>;
  date?: string;
  buttons?: Array<{ id: string; component: ReactNode }>;
  value?: string;
};
