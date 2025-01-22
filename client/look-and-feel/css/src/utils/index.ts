export type Tchildren = (Node | string)[];
export type Tattributes = Record<string, string>;

type createNodeProps = {
  node?: keyof HTMLElementTagNameMap | keyof SVGElementTagNameMap;
  attributes?: Tattributes;
  children?: Tchildren;
};

export function createNode({
  node = "div",
  attributes = {},
  children = [],
}: createNodeProps) {
  const el = document.createElement(node);
  for (const key in attributes) {
    if (attributes[key]) {
      el.setAttribute(key, attributes[key]);
    }
  }

  if (children) {
    el.append(...children);
  }
  return el;
}

export const div = (
  children: Tchildren,
  attributes?: Tattributes,
): HTMLElement => createNode({ attributes, children });

export const h1 = (
  children: Tchildren,
  attributes?: Tattributes,
): HTMLElement => createNode({ node: "h1", attributes, children });

export const h2 = (
  children: Tchildren,
  attributes?: Tattributes,
): HTMLElement => createNode({ node: "h2", attributes, children });

export const h3 = (
  children: Tchildren,
  attributes?: Tattributes,
): HTMLElement => createNode({ node: "h3", attributes, children });

export const h4 = (
  children: Tchildren,
  attributes?: Tattributes,
): HTMLElement => createNode({ node: "h4", attributes, children });

export const h5 = (
  children: Tchildren,
  attributes?: Tattributes,
): HTMLElement => createNode({ node: "h5", attributes, children });

export const h6 = (
  children: Tchildren,
  attributes?: Tattributes,
): HTMLElement => createNode({ node: "h6", attributes, children });

export const form = (
  children: Tchildren,
  attributes?: Tattributes,
): HTMLElement => createNode({ node: "form", attributes, children });

export const header = (
  children: Tchildren,
  attributes?: Tattributes,
): HTMLElement => createNode({ node: "header", attributes, children });

export const footer = (
  children: Tchildren,
  attributes?: Tattributes,
): HTMLElement => createNode({ node: "footer", attributes, children });

export const section = (
  children: Tchildren,
  attributes?: Tattributes,
): HTMLElement => createNode({ node: "section", attributes, children });

export const dialog = (
  children: Tchildren,
  attributes?: Tattributes,
): HTMLElement => createNode({ node: "dialog", attributes, children });

export const p = (children: Tchildren, attributes?: Tattributes): HTMLElement =>
  createNode({ node: "p", attributes, children });

export const plorem = (attributes?: Tattributes): HTMLElement =>
  createNode({
    node: "p",
    attributes,
    children: [
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, suscipit sint! Reiciendis, eos? Eveniet, aut qui. Autem reprehenderit, consequuntur laboriosam debitis saepe facilis atque molestias? Reiciendis nam recusandae culpa sapiente?",
    ],
  });

export const label = (
  children: Tchildren,
  attributes?: Tattributes,
): HTMLElement => createNode({ node: "label", attributes, children });

export const input = (attributes?: Tattributes): HTMLElement =>
  createNode({ node: "input", attributes });

export const span = (
  children: Tchildren,
  attributes?: Tattributes,
): HTMLElement => createNode({ node: "span", attributes, children });

export const checkbox = (attributes?: Tattributes): HTMLElement =>
  input({ type: "checkbox", ...attributes });

export const svg = ({ path, ...svgAttributes }: Tattributes): HTMLElement => {
  const pathElement = createNode({ node: "path", attributes: { d: path } });

  const {
    focusable = "false",
    viewBox = "0 0 24 24",
    "aria-hidden": ariaHidden = "true",
    ...restSvgAttributes
  } = svgAttributes;

  return createNode({
    node: "svg",
    attributes: {
      focusable,
      viewBox,
      "aria-hidden": ariaHidden,
      ...restSvgAttributes,
    },
    children: [pathElement],
  });
};

export const grid = ({
  node = "main",
  attributes = {},
  children = [],
}: createNodeProps): HTMLElement => {
  const { class: className } = attributes;
  const currentClassName = className ? ` ${className}` : "";
  return createNode({
    node,
    attributes: {
      ...attributes,
      class: `grid${currentClassName}`,
    },
    children,
  });
};

export const subgrid = ({
  node = "div",
  attributes = {},
  children = [],
}: createNodeProps): HTMLElement => {
  const { class: className } = attributes;
  const currentClassName = className ? ` ${className}` : "";
  return createNode({
    node,
    attributes: {
      ...attributes,
      class: `subgrid${currentClassName}`,
    },
    children,
  });
};
