import type { ComponentProps } from "react";
import { Button, Tag } from "../../client";

export type ContentTabItem = {
  id?: string;
  title: string;
  subtitle?: string;
  tag?: string;
  tagProps?: ComponentProps<typeof Tag>;
  date?: string;
  buttons?: Array<ComponentProps<typeof Button>>;
  value?: string;
};
