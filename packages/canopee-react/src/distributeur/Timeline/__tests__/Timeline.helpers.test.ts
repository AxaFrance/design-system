import { describe, expect, it } from "vitest";
import { formatDate, isDateInFuture } from "../Timeline.helpers";

describe("Timeline helpers", () => {
  it("should return an empty string when date is undefined", () => {
    expect(formatDate()).toBe("");
  });

  it("should return true when date is undefined", () => {
    expect(isDateInFuture()).toBe(true);
  });
});
