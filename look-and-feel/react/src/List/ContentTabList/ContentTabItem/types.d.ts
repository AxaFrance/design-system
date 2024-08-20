import type { ComponentProps } from "react";
import { Button, Tag } from "../../../look-and-feel";

export type TContentTabItem = {
  id?: string;
  title: string;
  subtitle?: string;
  tag?: string;
  tagProps?: ComponentProps<typeof Tag>;
  date?: string;
  buttons?: Array<ComponentProps<typeof Button>>;
  value?: string;
};
