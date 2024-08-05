import type { Option } from ".";

export const getFirstId = (options: Option[]) =>
  !options || options.length === 0 ? "" : options[0].id;
