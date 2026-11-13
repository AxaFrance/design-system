import { act, render, waitFor } from "@testing-library/react";
import userEvent, { type UserEvent } from "@testing-library/user-event";
import { Popover } from "../Popover";

describe("<Popover />", () => {
  let user: UserEvent;
  beforeEach(() => {
    user = userEvent.setup();
  });

  describe.each(["click", "hover"] as const)(
    "trigger name in %s mode",
    (mode) => {
      it("names the trigger with triggerAriaLabel", () => {
        const { getByRole } = render(
          <Popover
            mode={mode}
            popoverElement={<p>Modal content</p>}
            triggerAriaLabel="Aide"
          >
            <span aria-hidden="true">?</span>
          </Popover>,
        );

        expect(getByRole("button")).toHaveAccessibleName("Aide");
      });

      it("keeps the name of the trigger content without triggerAriaLabel", () => {
        const { getByRole } = render(
          <Popover mode={mode} popoverElement={<p>Modal content</p>}>
            <span>Source</span>
          </Popover>,
        );

        expect(getByRole("button")).toHaveAccessibleName("Source");
        expect(getByRole("button")).not.toHaveAttribute("aria-label");
      });

      it("describes the named trigger by the open popover content", async () => {
        const { getByRole } = render(
          <Popover
            mode={mode}
            popoverElement={<p>Modal content</p>}
            triggerAriaLabel="Aide"
          >
            <span aria-hidden="true">?</span>
          </Popover>,
        );
        const trigger = getByRole("button");

        expect(trigger).not.toHaveAttribute("aria-describedby");

        await (mode === "click" ? user.click(trigger) : user.hover(trigger));

        expect(trigger).toHaveAccessibleName("Aide");
        expect(trigger).toHaveAccessibleDescription("Modal content");
      });
    },
  );

  describe('mode "click"', () => {
    it('Should contain PopoverClick element when mode "click"', () => {
      const { getByRole } = render(
        <Popover mode="click" popoverElement={<p>Modal content</p>}>
          <span>Source</span>
        </Popover>,
      );

      // Assert
      expect(getByRole("presentation")).toBeInTheDocument();
    });

    it("Should display content when element clicked", async () => {
      // Arrange
      const { getByRole } = render(
        <Popover mode="click" popoverElement={<p>Modal content</p>}>
          <span>Source</span>
        </Popover>,
      );

      await user.click(getByRole("presentation"));

      expect(getByRole("presentation").nextElementSibling).toHaveClass(
        "af-popover__container-pop",
      );
    });

    it("Should hide content when element reclicked", async () => {
      // Arrange
      const { getByRole } = render(
        <Popover mode="click" popoverElement={<p>Modal content</p>}>
          <span>Source</span>
        </Popover>,
      );

      await user.click(getByRole("presentation"));

      expect(getByRole("presentation").nextElementSibling).toHaveClass(
        "af-popover__container-pop",
      );

      await user.click(getByRole("presentation"));

      expect(getByRole("presentation").nextElementSibling).toBeNull();
    });

    it('Should contain PopoverClick element when the "Enter" key is pressed and the button is focused', async () => {
      const { getByRole } = render(
        <Popover mode="click" popoverElement={<p>Modal content</p>}>
          <span>Source</span>
        </Popover>,
      );

      const buttonElement = getByRole("button");
      act(() => buttonElement.focus());

      expect(buttonElement).toHaveFocus();

      await user.keyboard("{Enter}");

      expect(getByRole("presentation").nextElementSibling).toHaveClass(
        "af-popover__container-pop",
      );
    });

    it("Should hide PopoverClick element when the button loses focus", async () => {
      const { getByRole } = render(
        <Popover mode="click" popoverElement={<p>Modal content</p>}>
          <span>Source</span>
        </Popover>,
      );

      const buttonElement = getByRole("button");
      act(() => buttonElement.focus());

      expect(buttonElement).toHaveFocus();

      await user.keyboard("{Enter}");
      expect(getByRole("presentation").nextElementSibling).toHaveClass(
        "af-popover__container-pop",
      );

      await user.tab();
      expect(buttonElement).not.toHaveFocus();
      expect(getByRole("presentation").nextElementSibling).toBeNull();
    });
  });

  describe('mode "hover"', () => {
    it('Should contain PopoverOver element when mode "hover"', () => {
      // Arrange
      const { getByRole } = render(
        <Popover mode="hover" popoverElement={<p>Modal content</p>}>
          <span>Source</span>
        </Popover>,
      );

      // Assert
      expect(
        getByRole("presentation")!.parentElement!.parentElement,
      ).toHaveClass("af-popover__wrapper");
    });

    it("Should display content when element hovered", async () => {
      // Arrange
      const { getByRole } = render(
        <Popover mode="hover" popoverElement={<p>Modal content</p>}>
          <span>Source</span>
        </Popover>,
      );

      await user.hover(getByRole("presentation"));

      // Assert
      expect(getByRole("presentation").nextElementSibling).toHaveClass(
        "af-popover__container-pop",
      );
    });

    it("Should display content when element is focused", async () => {
      // Arrange
      const { getByRole } = render(
        <Popover mode="hover" popoverElement={<p>Modal content</p>}>
          <span>Source</span>
        </Popover>,
      );

      const buttonElement = getByRole("button");
      act(() => buttonElement.focus());

      expect(buttonElement).toHaveFocus();

      // Assert
      await waitFor(() =>
        expect(getByRole("presentation").nextElementSibling).toHaveClass(
          "af-popover__container-pop",
        ),
      );
    });

    it("Should hide content when element not hovered", async () => {
      // Arrange
      const { getByRole } = render(
        <Popover mode="hover" popoverElement={<p>Modal content</p>}>
          <span>Source</span>
        </Popover>,
      );

      // Act
      await user.hover(getByRole("presentation"));
      await user.unhover(getByRole("presentation"));

      // Assert
      expect(getByRole("presentation").nextSibling).toBeNull();
    });
    it("Should hide content when element loses focus", async () => {
      // Arrange
      const { getByRole } = render(
        <Popover mode="hover" popoverElement={<p>Modal content</p>}>
          <span>Source</span>
        </Popover>,
      );

      const buttonElement = getByRole("button");
      act(() => buttonElement.focus());

      expect(buttonElement).toHaveFocus();

      await waitFor(() =>
        expect(getByRole("presentation").nextElementSibling).toHaveClass(
          "af-popover__container-pop",
        ),
      );

      await user.tab();

      expect(buttonElement).not.toHaveFocus();
      await waitFor(() =>
        expect(getByRole("presentation").nextElementSibling).toBeNull(),
      );
    });
  });
});
