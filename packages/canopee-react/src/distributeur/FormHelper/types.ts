import type { ItemFormHelperVariant } from "../ItemFormHelper/ItemFormHelper";

/** Texts of the step states, e.g. `{ validated: "completed" }` for another language. */
export type FormHelperStateLabels = Partial<
  Record<ItemFormHelperVariant, string>
>;
