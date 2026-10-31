const FOCUSABLE_SELECTOR = [
  "a[href]",
  "button:not([disabled])",
  "input:not([disabled]):not([type='hidden'])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  "[tabindex]:not([tabindex='-1'])",
].join(",");

/**
 * Returns the focusable elements of a container, in document order, without
 * the ones that are hidden or inert.
 */
export const getFocusableElements = (container: HTMLElement) =>
  Array.from(
    container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR),
  ).filter((element) => !element.closest("[hidden], [inert]"));

/**
 * Pairs each item with a React key built from its name, made unique when
 * several items share the same name (`Title`, `Title-2`, `Title-3`…).
 */
export const getKeyedItems = <T>(items: T[], getName: (item: T) => string) => {
  const counts = new Map<string, number>();

  return items.map((item) => {
    const name = getName(item);
    const count = (counts.get(name) ?? 0) + 1;
    counts.set(name, count);

    return { key: count > 1 ? `${name}-${count}` : name, item };
  });
};

/**
 * Makes everything around `root` inert: its siblings, then the siblings of
 * each of its ancestors up to `body`. The background can no longer be reached
 * with the keyboard nor read by screen readers, while `root` stays usable.
 * Returns the function that restores the previous state; elements that were
 * already inert are left as they were.
 */
export const makeOthersInert = (root: HTMLElement) => {
  const changed: Element[] = [];
  let node: Element = root;
  let parent = node.parentElement;

  while (node !== document.body && parent) {
    const current = node;

    Array.from(parent.children).forEach((sibling) => {
      if (sibling !== current && !sibling.hasAttribute("inert")) {
        sibling.setAttribute("inert", "");
        changed.push(sibling);
      }
    });

    node = parent;
    parent = node.parentElement;
  }

  return () => {
    changed.forEach((element) => element.removeAttribute("inert"));
  };
};

/**
 * Stops the page from scrolling, on `html` so that no stylesheet of the
 * application can override it, and keeps the width of the scrollbar to avoid
 * a shift of the layout. Returns the function that restores the page.
 */
export const lockPageScroll = () => {
  const { documentElement } = document;
  const { style } = documentElement;
  const { overflow, paddingRight } = style;
  const scrollbarWidth = window.innerWidth - documentElement.clientWidth;

  if (documentElement.clientWidth > 0 && scrollbarWidth > 0) {
    const currentPadding =
      Number.parseFloat(getComputedStyle(documentElement).paddingRight) || 0;
    style.paddingRight = `${currentPadding + scrollbarWidth}px`;
  }
  style.overflow = "hidden";

  return () => {
    style.overflow = overflow;
    style.paddingRight = paddingRight;
  };
};
