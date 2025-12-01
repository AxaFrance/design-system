import { render, waitFor } from "@testing-library/react";
import userEvent, { UserEvent } from "@testing-library/user-event";
import { act } from "react";
import { Popover } from "../Popover";

describe("<Popover />", () => {
  let user: UserEvent;
  beforeEach(() => {
    user = userEvent.setup();
  });

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
