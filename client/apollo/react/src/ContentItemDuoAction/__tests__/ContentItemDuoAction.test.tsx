import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { ContentItemDuoAction as ContentItemDuoActionApollo } from "../ContentItemDuoActionApollo";
import { ContentItemDuoAction as ContentItemDuoActionLF } from "../ContentItemDuoActionLF";
import { Button } from "../../Button/ButtonApollo";

const variants = [
  { name: "Apollo", Component: ContentItemDuoActionApollo },
  { name: "LF", Component: ContentItemDuoActionLF },
];

describe.each(variants)(
  "ContentItemDuoAction %s Component",
  ({ Component }) => {
    it("renders correctly for state 'toggle'", async () => {
      const handleOnClick = vi.fn();
      render(
        <Component
          state="toggle"
          contentItemProps={{
            type: "icon",
            title: "Icon Title",
            subtitle1: "Primary Subtitle",
            subtitle2: "Secondary Subtitle",
            icon: "test-icon.svg",
          }}
          toggleProps={{
            onClick: handleOnClick,
          }}
        />,
      );

      expect(screen.getByText("Icon Title")).toBeInTheDocument();
      expect(screen.getByText("Primary Subtitle")).toBeInTheDocument();
      expect(screen.getByText("Secondary Subtitle")).toBeInTheDocument();
      expect(screen.getByTestId("icon")).toHaveAttribute(
        "data-src",
        "test-icon.svg",
      );
      const toggle = screen.getByRole<HTMLInputElement>("checkbox");
      expect(toggle).not.toBeChecked();
    });

    it("renders correctly for state 'edit'", async () => {
      const handleDeleteClick = vi.fn();
      const handleEditClick = vi.fn();
      render(
        <Component
          state="edit"
          contentItemProps={{
            type: "icon",
            title: "Icon Title",
            subtitle1: "Primary Subtitle",
            subtitle2: "Secondary Subtitle",
            icon: "test-icon.svg",
          }}
          buttons={
            <>
              <Button
                variant="ghost"
                icon-right="arrow-right"
                onClick={handleEditClick}
              >
                Modifier
              </Button>
              <Button
                variant="ghost"
                icon-right="arrow-right"
                onClick={handleDeleteClick}
              >
                Supprimer
              </Button>
            </>
          }
        />,
      );

      expect(screen.getByText("Icon Title")).toBeInTheDocument();
      expect(screen.getByText("Primary Subtitle")).toBeInTheDocument();
      expect(screen.getByText("Secondary Subtitle")).toBeInTheDocument();
      expect(screen.getByTestId("icon")).toHaveAttribute(
        "data-src",
        "test-icon.svg",
      );

      await userEvent.click(screen.getByText("Modifier"));
      expect(handleEditClick).toHaveBeenCalledTimes(1);
      await userEvent.click(screen.getByText("Supprimer"));
      expect(handleDeleteClick).toHaveBeenCalledTimes(1);
    });
  },
);
