import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
import { InputDate } from "../InputDateApollo";

describe("<InputDate />", () => {
  const testDate = new Date("2025-01-01");
  it("renders the InputDate component with label only", () => {
    render(<InputDate label="Test Label" />);
    expect(screen.getByText("Test Label")).toBeInTheDocument();
  });

  it("renders all props", () => {
    render(
      <InputDate
        id="id"
        label="test"
        name="name"
        error="error"
        value={testDate}
        onChange={() => {}}
        required
        description="description"
        buttonLabel="buttonLabel"
        helper="helper"
      />,
    );

    const inputDate = screen.getByLabelText(/test/);
    expect(inputDate).toBeInTheDocument();
    expect(inputDate).toHaveAccessibleDescription("helper");
    expect(inputDate).toHaveAccessibleErrorMessage("error");
    expect(inputDate).toHaveValue("2025-01-01");
    expect(inputDate).toHaveClass("af-form__input-date");
    expect(inputDate).toHaveAttribute("name", "name");
    expect(inputDate).toHaveAttribute("type", "date");
    expect(inputDate).toBeRequired();
    expect(inputDate).toHaveAttribute("id", "id");
  });

  it("handles a Date object as value correctly", () => {
    render(<InputDate label="test" value={testDate} />);
    const inputDate = screen.getByLabelText(/test/);
    expect(inputDate).toBeInTheDocument();
    expect(inputDate).toHaveValue("2025-01-01");
  });

  it("handles a string in YYYY-MM-DD format as value correctly", () => {
    render(<InputDate label="test" value="2025-01-01" />);
    const inputDate = screen.getByLabelText(/test/);
    expect(inputDate).toBeInTheDocument();
    expect(inputDate).toHaveValue("2025-01-01");
  });

  it("displays an empty value when no value is provided", () => {
    render(<InputDate label="test" />);
    const inputDate = screen.getByLabelText(/test/);
    expect(inputDate).toBeInTheDocument();
    expect(inputDate).toHaveValue("");
  });

  it("handles min and max as Date objects", () => {
    render(
      <InputDate
        label="test"
        min={new Date("2024-01-01")}
        max={new Date("2025-01-01")}
      />,
    );

    const inputDate = screen.getByLabelText(/test/);
    expect(inputDate).toHaveAttribute("min", "2024-01-01");
    expect(inputDate).toHaveAttribute("max", "2025-01-01");
  });

  it("handles min and max as string values", () => {
    render(<InputDate label="test" min="2024-01-01" max="2025-01-01" />);

    const inputDate = screen.getByLabelText(/test/);
    expect(inputDate).toHaveAttribute("min", "2024-01-01");
    expect(inputDate).toHaveAttribute("max", "2025-01-01");
  });

  it("does not set min and max attributes if not provided", () => {
    render(<InputDate label="test" />);

    const inputDate = screen.getByLabelText(/test/);
    expect(inputDate).not.toHaveAttribute("min");
    expect(inputDate).not.toHaveAttribute("max");
  });

  describe("A11Y", () => {
    it("shouldn't have an accessibility violation <InputDate />", async () => {
      const { container } = render(<InputDate label="test" />);
      expect(await axe(container)).toHaveNoViolations();
    });

    it("should set aria-describedby when helper is present", () => {
      render(<InputDate label="test" helper="help text" />);

      const input = screen.getByLabelText(/test/);
      expect(input).toHaveAttribute("aria-describedby");

      const helper = screen.getByText("help text");
      expect(input.getAttribute("aria-describedby")).toStrictEqual(
        helper.getAttribute("id"),
      );
    });

    it("should set aria-describedby with two ids when helper and success are present", () => {
      render(
        <InputDate label="test" helper="help text" success="success message" />,
      );

      const input = screen.getByLabelText(/test/);
      expect(input).toHaveAttribute("aria-describedby");

      const helper = screen.getByText("help text");
      const success = screen.getByText("success message");
      const inputDescribedby = input.getAttribute("aria-describedby");
      expect(inputDescribedby).toStrictEqual(
        `${helper.getAttribute("id")} ${success.parentElement!.getAttribute("id")}`,
      );
    });

    it("should set aria-errormessage when error is present", () => {
      render(<InputDate label="test" error="error message" />);

      const input = screen.getByLabelText(/test/);
      expect(input).toHaveAttribute("aria-errormessage");

      const error = screen.getByText("error message");
      expect(input.getAttribute("aria-errormessage")).toStrictEqual(
        error.parentElement!.getAttribute("id"),
      );
    });

    it("should not set aria-describedby or aria-errormessage when no helper, success, or error", () => {
      render(<InputDate label="test" />);
      const input = screen.getByLabelText(/test/);
      expect(input).not.toHaveAttribute("aria-describedby");
      expect(input).not.toHaveAttribute("aria-errormessage");
    });
  });

  it("adds the af-form__input-date--no-picker class when hidePicker is true", () => {
    render(<InputDate label="Date de naissance" hidePicker />);
    const inputDate = screen.getByLabelText(/Date de naissance/);
    expect(inputDate).toHaveClass("af-form__input-date--no-picker");
  });

  it("does not add the af-form__input-date--no-picker class when hidePicker is not defined", () => {
    render(<InputDate label="Date de naissance" />);
    const inputDate = screen.getByLabelText(/Date de naissance/);
    expect(inputDate).not.toHaveClass("af-form__input-date--no-picker");
  });

  describe("date picker visibility management", () => {
    const originalPreventDefault = Event.prototype.preventDefault;
    const originalWindowNavigator = global.window.navigator;
    const preventDefaultMock = vi.fn();
    const keypressOptions = {
      space: {
        keyCode: 32,
        code: "Space",
      },
      enter: {
        keyCode: 13,
        code: "Enter",
      },
    };

    beforeAll(() => {
      Event.prototype.preventDefault = preventDefaultMock;
    });

    afterAll(() => {
      Event.prototype.preventDefault = originalPreventDefault;
    });

    beforeEach(() => {
      preventDefaultMock.mockReset();
    });

    const mockUserAgent = (agent: string) => {
      global.window.navigator = {
        ...originalWindowNavigator,
        userAgent: agent,
      };
    };
    const restoreUserAgent = () => {
      global.window.navigator = originalWindowNavigator;
    };

    it.each([
      vi.fn(),
      null,
      undefined,
      {} as React.RefObject<HTMLInputElement>,
    ])("prevents click events when hidePicker is true", async (ref) => {
      render(<InputDate label="Date de naissance" hidePicker ref={ref} />);
      const inputDate = screen.getByLabelText(/Date de naissance/);

      await userEvent.click(inputDate);
      expect(preventDefaultMock.mock.contexts).toHaveLength(1);
      expect(preventDefaultMock.mock.contexts[0]).toMatchObject<
        Partial<MouseEvent>
      >({
        type: "click",
      });
      expect(preventDefaultMock).toHaveBeenCalledTimes(1);
    });

    it("prevents space keypress events when hidePicker is true", async () => {
      render(<InputDate label="Date de naissance" hidePicker />);
      const inputDate = screen.getByLabelText(/Date de naissance/);

      await userEvent.clear(inputDate);
      expect(inputDate).toHaveFocus();
      fireEvent.keyDown(inputDate, keypressOptions.space);
      expect(preventDefaultMock).toHaveBeenCalledTimes(1);
      expect(preventDefaultMock.mock.contexts).toHaveLength(1);
      expect(preventDefaultMock.mock.contexts[0]).toMatchObject<
        Partial<KeyboardEvent>
      >({
        type: "keydown",
        ...keypressOptions.space,
      });
    });

    it("does not prevent enter keypress events when hidePicker is true on webkit agent", async () => {
      render(<InputDate label="Date de naissance" hidePicker />);
      const inputDate = screen.getByLabelText(/Date de naissance/);
      // Mock a WebKit user agent
      mockUserAgent("WebKit");

      await userEvent.clear(inputDate);
      expect(inputDate).toHaveFocus();
      fireEvent.keyDown(inputDate, keypressOptions.enter);
      expect(preventDefaultMock).not.toHaveBeenCalled();

      // Restore the original user agent
      restoreUserAgent();
    });

    it("prevents enter keypress events when hidePicker is true on a non webkit agent", async () => {
      render(<InputDate label="Date de naissance" hidePicker />);
      const inputDate = screen.getByLabelText(/Date de naissance/);
      // Mock a non WebKit user agent
      mockUserAgent("Firefox");

      await userEvent.clear(inputDate);
      expect(inputDate).toHaveFocus();
      fireEvent.keyDown(inputDate, keypressOptions.enter);
      expect(preventDefaultMock.mock.contexts).toHaveLength(1);
      expect(preventDefaultMock.mock.contexts[0]).toMatchObject<
        Partial<KeyboardEvent>
      >({
        type: "keydown",
        ...keypressOptions.enter,
      });

      // Restore the original user agent
      restoreUserAgent();
    });

    it("does not prevent space and enter keypress and click when hidePicker is true on non a webkit agent but the event target is a different element", async () => {
      render(
        <>
          <input type="date" aria-label="different input date" />
          <InputDate label="Date de naissance" hidePicker />
        </>,
      );
      const differentInputDate = screen.getByLabelText(/different input date/);
      // Mock a non-WebKit user agent
      mockUserAgent("Firefox");

      await userEvent.clear(differentInputDate);
      expect(differentInputDate).toHaveFocus();
      fireEvent.keyDown(differentInputDate, keypressOptions.space);
      fireEvent.keyDown(differentInputDate, keypressOptions.enter);
      await userEvent.click(differentInputDate);
      expect(preventDefaultMock).not.toHaveBeenCalled();

      // Restore the original user agent
      restoreUserAgent();
    });
  });
});
