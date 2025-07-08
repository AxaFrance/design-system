import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { toHaveNoViolations } from "jest-axe";
import { afterEach, expect, vi, vitest } from "vitest";

expect.extend(toHaveNoViolations);

afterEach(() => {
  cleanup();
});
global.URL.createObjectURL = vi.fn(() => "mockedObjectURL");

vi.mock("@tanem/svg-injector", () => ({
  SVGInjector: vi.fn(),
}));

HTMLDialogElement.prototype.show = vitest.fn(function mock(
  this: HTMLDialogElement,
) {
  this.open = true;
});

HTMLDialogElement.prototype.showModal = vitest.fn(function mock(
  this: HTMLDialogElement,
) {
  this.open = true;
});

HTMLDialogElement.prototype.close = vitest.fn(function mock(
  this: HTMLDialogElement,
) {
  this.open = false;
});
