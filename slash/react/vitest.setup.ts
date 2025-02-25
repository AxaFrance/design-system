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
