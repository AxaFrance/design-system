import { MaterialIcons, CustomIcons } from "./constants";

type MaterialIcon = (typeof MaterialIcons)[number];
type CustomIcon = (typeof CustomIcons)[number];

export type { MaterialIcon };
export type { CustomIcon };
export { MaterialIcons, CustomIcons };
