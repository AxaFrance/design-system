// Types shared by src/code.ts. Nothing here exists at runtime.

// ------------------------------------------------------------ JSON

// What JSON.stringify writes and JSON.parse reads.
export type Json =
  | null
  | boolean
  | number
  | string
  | Json[]
  | { [key: string]: Json | undefined };

// A configuration of a variant: axis name, value.
export type Config = Record<string, string>;

// A when: for each axis, a value or a list of values.
export type When = Record<string, string | string[]>;

// ------------------------------------------------------------ the sheet

export type Level = "error" | "warning" | "info";

export interface Issue {
  level: Level;
  rule: string;
  where: string;
  message: string;
  occurrences?: number;
}

// An issue as the interface displays it: readable location, and the layers it designates.
export interface IssueDetail extends Issue {
  location: string;
  ids: string[];
  variants: number;
}

// The Figma nodes designated by an issue.
export interface IssueLocation {
  ids: string[];
  variants: number;
}

// Entry of an index of the sheet (tokens, text styles, components, collections of modes).
export interface IndexEntry {
  library?: string | null;
  collection?: string;
  key?: string;
}
export type Index = Record<string, IndexEntry>;

export interface Control {
  layer: string;
  attribute: string;
}

export interface Prop {
  type: string;
  enum?: string[];
  default?: string | boolean;
  controls?: Control[];
}

export interface Slot {
  as?: string;
  accepts?: string;
  default?: { text?: string; swap?: string | null };
  preferred?: string[];
  controls?: Control[];
}

export interface Meta {
  name: string;
  version: string | null;
  tokensVersion: string | null;
  type: string;
  extends?: string | null;
  templateLevel?: string;
  figmaKey?: string | null;
  library?: string;
  documentationLinks?: string[];
}

export interface Api {
  props: Record<string, Prop>;
  exposed?: { from: string | null; props: string[] }[];
}

// A layer of the tree of a variant.
export interface TreeNode {
  name: string;
  type?: string;
  hidden?: boolean;
  component?: string | null;
  children?: TreeNode[];
}

export interface Tree {
  when: When;
  configs?: Config[];
  tree: TreeNode[];
}

export interface Structure {
  slots: Record<string, Slot>;
  trees: Tree[];
  uses: string[];
}

// The styles of the layers of a variant: for each layer, its fields.
export type LayerStyles = Record<string, Json>;
export type VariantStyles = Record<string, LayerStyles>;

export interface Override {
  when: When;
  styles: Record<string, Record<string, Json | null>>;
}

// The default styles carry a when and one entry per layer.
export interface Styles {
  default: Record<string, LayerStyles>;
  overrides?: Override[];
}

export interface SheetVariant {
  values: Config;
  position?: number[];
}

// A sheet, as the extraction produces it.
export interface Sheet {
  formatVersion: string;
  meta: Meta;
  api: Api;
  variants: SheetVariant[];
  structure: Structure;
  styles: Styles;
  tokens: Index;
  textStyles: Index;
  components: Index;
  modeCollections: Index;
  issues: Issue[];
  _tool: string;
}

// A sheet reduced to what counts in a change of version.
export interface ComparableSheet extends Omit<SheetLike, "styles" | "variants"> {
  styles?: Partial<Styles> | Record<string, VariantStyles>;
  variants?: { values: Config }[];
}

// A sheet read from the file or from a JSON of an older format: any part may be absent.
export interface SheetLike {
  formatVersion?: string;
  meta?: Partial<Meta>;
  api?: Partial<Api>;
  variants?: SheetVariant[];
  structure?: Partial<Structure>;
  styles?: Partial<Styles>;
  tokens?: Index;
  textStyles?: Index;
  components?: Index;
  modeCollections?: Index;
  issues?: Issue[];
  _tool?: string;
}
