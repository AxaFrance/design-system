import { act, renderHook } from "@testing-library/react";
import { vi } from "vitest";
import { useSequentialProgress } from "../useSequentialProgress";

// Helper to advance timers
const advanceTimers = async (ms: number) => {
  await act(async () => {
    vi.advanceTimersByTime(ms);
  });
};

describe("useSequentialProgress", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.clearAllTimers();
    vi.useRealTimers();
  });

  it("should initialize with correct progress values", () => {
    const { result } = renderHook(() => useSequentialProgress(0.5, 1, 3));
    expect(result.current).toStrictEqual([1, 0.5, 0]);
  });

  it("should animate progress when stepPercentage changes", async () => {
    const { result, rerender } = renderHook(
      ({ stepPercentage }) => useSequentialProgress(stepPercentage, 1, 3, 100),
      { initialProps: { stepPercentage: 0.2 } },
    );
    expect(result.current).toEqual([1, 0.2, 0]);
    rerender({ stepPercentage: 0.8 });
    await advanceTimers(100); // simulate animation
    expect(result.current[1]).toStrictEqual(0.8);
  });

  it("should animate progress when currentStepIndex changes", async () => {
    const { result, rerender } = renderHook(
      ({ currentStepIndex }) =>
        useSequentialProgress(0.5, currentStepIndex, 3, 100),
      { initialProps: { currentStepIndex: 0 } },
    );
    expect(result.current).toEqual([0.5, 0, 0]);
    rerender({ currentStepIndex: 2 });
    await advanceTimers(100); // simulate animation
    expect(result.current).toStrictEqual([1, 1, 0]);
    await advanceTimers(100); // simulate animation
    expect(result.current).toStrictEqual([1, 1, 0.5]);
  });

  it("should reset progress array when steps changes", () => {
    const { result, rerender } = renderHook(
      ({ steps }) => useSequentialProgress(0.5, 1, steps),
      { initialProps: { steps: 3 } },
    );
    expect(result.current).toStrictEqual([1, 0.5, 0]);
    rerender({ steps: 5 });
    expect(result.current).toStrictEqual([1, 0.5, 0, 0, 0]);
    rerender({ steps: 2 });
    expect(result.current).toStrictEqual([1, 0.5]);
  });

  it("should cleanup timers on unmount", () => {
    const spy = vi.spyOn(globalThis, "clearTimeout");
    // Start an animation so that a timer is active
    const { rerender, unmount } = renderHook(
      ({ stepPercentage }) => useSequentialProgress(stepPercentage, 0, 2, 100),
      { initialProps: { stepPercentage: 0 } },
    );
    rerender({ stepPercentage: 0.5 }); // Triggers an animation
    unmount();
    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });
});
