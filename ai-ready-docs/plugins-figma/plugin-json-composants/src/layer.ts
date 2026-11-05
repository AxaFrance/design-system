// What the extraction reads on a Figma node. Nothing here exists at runtime.

// What the plugin reads on the ancestor of a node.
export interface ParentLayer {
  readonly id: string;
  readonly name: string;
  readonly type: string;
  readonly removed?: boolean;
  readonly parent?: ParentLayer | null;
  getSharedPluginData(namespace: string, key: string): string;
  setSharedPluginData(namespace: string, key: string, value: string): void;
}

// What the extraction reads on a Figma node. Every node type of @figma/plugin-typings fits
// (a node assigned to a Layer keeps the types of Figma for each field); a field that a type
// of node does not have is absent, and the code tests it before reading it.
export interface Layer {
  readonly id: string;
  readonly name: string;
  readonly type: string;
  readonly parent?: ParentLayer | null;
  readonly removed?: boolean;
  readonly visible?: boolean;
  readonly children?: readonly Layer[];
  findAll?(callback: (node: Layer) => boolean): Layer[];
  findOne?(callback: (node: Layer) => boolean): Layer | null;
  // The variables the fields are bound to: an alias per field, a list of aliases for the paints.
  readonly boundVariables?: { readonly [field: string]: unknown };
  readonly explicitVariableModes?: { [collectionId: string]: string };
  readonly overrides?: readonly {
    readonly id: string;
    readonly overriddenFields: readonly string[];
  }[];
  readonly fills?: readonly Paint[] | PluginAPI["mixed"];
  readonly strokes?: readonly Paint[];
  readonly effects?: readonly Effect[];
  readonly opacity?: number;
  readonly x?: number;
  readonly y?: number;
  readonly width?: number;
  readonly height?: number;
  readonly strokeWeight?: number | PluginAPI["mixed"];
  readonly strokeTopWeight?: number;
  readonly strokeRightWeight?: number;
  readonly strokeBottomWeight?: number;
  readonly strokeLeftWeight?: number;
  readonly strokeAlign?: string;
  readonly cornerRadius?: number | PluginAPI["mixed"];
  readonly topLeftRadius?: number;
  readonly topRightRadius?: number;
  readonly bottomRightRadius?: number;
  readonly bottomLeftRadius?: number;
  readonly paddingTop?: number;
  readonly paddingRight?: number;
  readonly paddingBottom?: number;
  readonly paddingLeft?: number;
  readonly itemSpacing?: number;
  readonly layoutMode?: string;
  readonly layoutWrap?: string;
  readonly layoutPositioning?: string;
  readonly layoutSizingHorizontal?: string;
  readonly layoutSizingVertical?: string;
  readonly primaryAxisAlignItems?: string;
  readonly counterAxisAlignItems?: string;
  readonly clipsContent?: boolean;
  readonly constraints?: Constraints;
  readonly minWidth?: number | null;
  readonly maxWidth?: number | null;
  readonly minHeight?: number | null;
  readonly maxHeight?: number | null;
  readonly characters?: string;
  readonly autoRename?: boolean;
  readonly textStyleId?: string | PluginAPI["mixed"];
  readonly fontName?: FontName | PluginAPI["mixed"];
  readonly fontSize?: number | PluginAPI["mixed"];
  readonly lineHeight?: LineHeight | PluginAPI["mixed"];
  readonly letterSpacing?: LetterSpacing | PluginAPI["mixed"];
  readonly textCase?: string | PluginAPI["mixed"];
  readonly textDecoration?: string | PluginAPI["mixed"];
  readonly textAlignHorizontal?: string;
  readonly textAlignVertical?: string;
  readonly key?: string;
  readonly remote?: boolean;
  readonly description?: string;
  readonly documentationLinks?: readonly { readonly uri: string }[];
  readonly componentPropertyDefinitions?: ComponentPropertyDefinitions;
  readonly componentPropertyReferences?: {
    readonly [nodeProperty: string]: string | undefined;
  } | null;
  readonly componentProperties?: { readonly [key: string]: unknown };
  readonly isExposedInstance?: boolean;
  getMainComponentAsync?(): Promise<Layer | null>;
  getSharedPluginData(namespace: string, key: string): string;
  setSharedPluginData(namespace: string, key: string, value: string): void;
}
