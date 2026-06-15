import { afterEach, describe, expect, it, vi } from "vitest";
import { formatDate, isDateInFuture } from "../Timeline.helpers";

describe("Timeline helpers", () => {
  afterEach(() => {
    vi.useRealTimers();
  });

  it("should return an empty string when date is undefined", () => {
    expect(formatDate()).toBe("");
  });

  it("should return true when date is undefined", () => {
    expect(isDateInFuture()).toBe(true);
  });

  it("should return true when date is in the future", () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date("2026-01-01T10:00:00.000Z"));

    expect(isDateInFuture(new Date("2026-01-01T10:00:01.000Z"))).toBe(true);
  });

  it("should return false when date is in the past", () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date("2026-01-01T10:00:00.000Z"));

    expect(isDateInFuture(new Date("2026-01-01T09:59:59.000Z"))).toBe(false);
  });
});
