export const getPosition = (
  max: number,
  position: number,
  direction: string,
) => {
  switch (direction) {
    case "ArrowRight":
    case "ArrowDown":
      return position + 1 < max ? position + 1 : 0;
    case "ArrowLeft":
    case "ArrowUp":
      return position - 1 < 0 ? max - 1 : position - 1;
    default:
      return position;
  }
};

const HANDLED_KEYS = new Set([
  "ArrowLeft",
  "ArrowRight",
  "ArrowUp",
  "ArrowDown",
  "Escape",
]);

/**
 * Only the keys the NavBar handles lose their default action: Tab, Shift+Tab
 * and Enter keep their native behavior (leave the menu, follow the link).
 */
export const isHandledKey = (key: string) => HANDLED_KEYS.has(key);
