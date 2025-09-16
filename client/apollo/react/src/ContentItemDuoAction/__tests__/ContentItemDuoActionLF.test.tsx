import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { ContentItemDuoAction } from "../ContentItemDuoActionLF";

describe("ContentItemDuoAction Component", () => {
  it("renders correctly for mode 'toggle'", async () => {
    render(
      <ContentItemDuoAction
        mode="toggle"
        contentItemProps={{
          type: "icon",
          title: "Icon Title",
          subtitle1: "Primary Subtitle",
          subtitle2: "Secondary Subtitle",
          icon: "test-icon.svg",
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

  it("renders correctly for mode 'edit'", async () => {
    const handleDeleteClick = vi.fn();
    const handleEditClick = vi.fn();
    render(
      <ContentItemDuoAction
        mode="edit"
        contentItemProps={{
          type: "icon",
          title: "Icon Title",
          subtitle1: "Primary Subtitle",
          subtitle2: "Secondary Subtitle",
          icon: "test-icon.svg",
        }}
        editProps={{
          onDeleteButtonClick: handleDeleteClick,
          onEditButtonClick: handleEditClick,
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

    await userEvent.click(screen.getByText("Modifier"));
    expect(handleEditClick).toHaveBeenCalledTimes(1);
    await userEvent.click(screen.getByText("Supprimer"));
    expect(handleDeleteClick).toHaveBeenCalledTimes(1);
  });
});
