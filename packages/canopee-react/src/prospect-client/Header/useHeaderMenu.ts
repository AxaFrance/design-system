import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type MouseEvent,
  type RefObject,
} from "react";
import {
  getFocusableElements,
  lockPageScroll,
  makeOthersInert,
} from "./Header.helpers";

/**
 * Clicks on these elements close the menu: the links, and the entries of the
 * panel. Other buttons of the panel (one that opens a dialog, for instance)
 * leave it open.
 */
const CLOSING_TARGETS = "a[href], .af-header__panel-list button";

type UseHeaderMenuParams = {
  /** The menu can be opened: small screen and something to show. */
  isEnabled: boolean;
  panelRef: RefObject<HTMLElement | null>;
  toggleRef: RefObject<HTMLElement | null>;
};

/**
 * Open state and behaviour of the header menu on small screens.
 *
 * While the menu is open:
 * - everything around the panel is inert, the rest of the header included,
 *   and the page does not scroll;
 * - the focus moves to the first focusable element of the panel;
 * - Escape, the close button (`close`), a link or an entry of the panel
 *   (`closeOnChoice`) closes it.
 *
 * When it closes, a focus that was in the panel goes back to the toggle.
 */
export const useHeaderMenu = ({
  isEnabled,
  panelRef,
  toggleRef,
}: UseHeaderMenuParams) => {
  const [isRequested, setIsRequested] = useState(false);
  const [wasEnabled, setWasEnabled] = useState(isEnabled);

  // Back on a large screen, the menu forgets that it was open.
  if (wasEnabled !== isEnabled) {
    setWasEnabled(isEnabled);
    if (!isEnabled) {
      setIsRequested(false);
    }
  }

  const isOpen = isEnabled && isRequested;
  const close = useCallback(() => setIsRequested(false), []);
  const toggle = useCallback(() => setIsRequested((previous) => !previous), []);

  // To be called in the click capture phase of the header.
  const closeOnChoice = useCallback(
    (event: MouseEvent<HTMLElement>) => {
      const { target } = event;
      if (
        isOpen &&
        target instanceof Element &&
        target.closest(CLOSING_TARGETS)
      ) {
        close();
      }
    },
    [isOpen, close],
  );

  useEffect(() => {
    const panel = panelRef.current;
    if (!isOpen || !panel) {
      return undefined;
    }

    const restoreBackground = makeOthersInert(panel);
    const restoreScroll = lockPageScroll();
    getFocusableElements(panel)[0]?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      const { target } = event;
      const isInOpenDialog =
        target instanceof Element && Boolean(target.closest("dialog[open]"));

      if (
        event.key === "Escape" &&
        !event.defaultPrevented &&
        !isInOpenDialog
      ) {
        close();
      }
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      restoreScroll();
      restoreBackground();
    };
  }, [isOpen, close, panelRef]);

  const wasOpen = useRef(false);
  useEffect(() => {
    if (wasOpen.current && !isOpen) {
      const { activeElement } = document;
      const isFocusLost =
        !activeElement ||
        activeElement === document.body ||
        Boolean(panelRef.current?.contains(activeElement));

      if (isFocusLost) {
        toggleRef.current?.focus();
      }
    }
    wasOpen.current = isOpen;
  }, [isOpen, panelRef, toggleRef]);

  return { isOpen, toggle, close, closeOnChoice };
};
