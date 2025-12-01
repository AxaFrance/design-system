import { type GroupBase } from "react-select";
import type {} from "react-select/base";
// This import is necessary for module augmentation.
// It allows us to extend the 'Props' interface in the 'react-select/base' module

declare module "react-select/base" {
  export interface Props<
    Option,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    IsMulti extends boolean,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    Group extends GroupBase<Option>,
  > {
    selectedLimit?: number;
    selectedLimitLabel?: string;
  }
}
