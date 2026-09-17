import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { toHaveNoViolations } from "jest-axe";
import { afterEach, expect, vi } from "vitest";

expect.extend(toHaveNoViolations);

afterEach(() => {
  cleanup();
});

global.URL.createObjectURL = vi.fn(() => "mockedObjectURL");

vi.mock("@tanem/svg-injector", () => ({
  SVGInjector: vi.fn(),
}));

HTMLDialogElement.prototype.show = vi.fn(function mock(
  this: HTMLDialogElement,
) {
  this.open = true;
});

HTMLDialogElement.prototype.showModal = vi.fn(function mock(
  this: HTMLDialogElement,
) {
  this.open = true;
});

HTMLDialogElement.prototype.close = vi.fn(function mock(
  this: HTMLDialogElement,
) {
  this.open = false;
});

// --- Popover API polyfill for jsdom -----------------------------------
// jsdom does not implement the native Popover API (no showPopover/
// hidePopover/togglePopover, no ToggleEvent, and clicking a
// `popovertarget` button does nothing). This lightweight polyfill
// reproduces just enough of the spec behavior (show/hide/toggle,
// invoker wiring, outside-click and Escape light dismiss) so components
// built on the Popover API can be tested with Testing Library.
class PopoverToggleEvent extends Event {
  readonly oldState: "open" | "closed";
  readonly newState: "open" | "closed";

  constructor(
    type: string,
    init: { oldState: "open" | "closed"; newState: "open" | "closed" },
  ) {
    super(type);
    this.oldState = init.oldState;
    this.newState = init.newState;
  }
}

if (typeof window.ToggleEvent === "undefined") {
  // @ts-expect-error jsdom does not implement ToggleEvent
  window.ToggleEvent = PopoverToggleEvent;
}

const openPopovers = new Set<HTMLElement>();

const dispatchToggle = (
  element: HTMLElement,
  oldState: "open" | "closed",
  newState: "open" | "closed",
) => {
  element.dispatchEvent(new PopoverToggleEvent("beforetoggle", { oldState, newState }));
  element.dispatchEvent(new PopoverToggleEvent("toggle", { oldState, newState }));
};

const openPopover = (element: HTMLElement) => {
  if (openPopovers.has(element)) return;
  openPopovers.add(element);
  element.style.display = "block";
  dispatchToggle(element, "closed", "open");
};

const closePopover = (element: HTMLElement) => {
  if (!openPopovers.has(element)) return;
  openPopovers.delete(element);
  element.style.display = "none";
  dispatchToggle(element, "open", "closed");
};

HTMLElement.prototype.showPopover = function showPopover(this: HTMLElement) {
  openPopover(this);
};

HTMLElement.prototype.hidePopover = function hidePopover(this: HTMLElement) {
  closePopover(this);
};

HTMLElement.prototype.togglePopover = function togglePopover(
  this: HTMLElement,
  force?: boolean,
) {
  const shouldOpen = force ?? !openPopovers.has(this);
  if (shouldOpen) openPopover(this);
  else closePopover(this);
  return shouldOpen;
};

const isAutoPopover = (element: Element) =>
  element.hasAttribute("popover") &&
  element.getAttribute("popover") !== "manual";

const closeLightDismissablePopovers = (except?: Element | null) => {
  openPopovers.forEach((popoverEl) => {
    if (isAutoPopover(popoverEl) && popoverEl !== except) {
      closePopover(popoverEl);
    }
  });
};

document.addEventListener("click", (event) => {
  const target = event.target as HTMLElement | null;
  const invoker = target?.closest("[popovertarget]");
  if (invoker) {
    const targetId = invoker.getAttribute("popovertarget");
    const popoverEl = targetId ? document.getElementById(targetId) : null;
    if (popoverEl) {
      const action = invoker.getAttribute("popovertargetaction") ?? "toggle";
      if (action === "show") openPopover(popoverEl);
      else if (action === "hide") closePopover(popoverEl);
      else popoverEl.togglePopover();
    }
    return;
  }

  // Light dismiss: clicking outside an open "auto" popover closes it.
  const clickedPopover = target?.closest("[popover]");
  closeLightDismissablePopovers(clickedPopover);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeLightDismissablePopovers();
});
