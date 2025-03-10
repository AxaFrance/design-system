/* eslint-disable import/no-extraneous-dependencies */
import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { toHaveNoViolations } from "jest-axe";
import { afterEach, expect, vi } from "vitest";

expect.extend(toHaveNoViolations);

afterEach(() => {
  cleanup();
});

vi.mock("@tanem/svg-injector", () => ({
  SVGInjector: vi.fn(),
}));
