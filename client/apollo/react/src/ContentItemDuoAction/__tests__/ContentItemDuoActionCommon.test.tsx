import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ContentItemDuoActionCommon } from "../ContentItemDuoActionCommon";
import { Button } from "../../Button/ButtonApollo";
import { ContentItemMono } from "../../ContentItemMono/ContentItemMonoApollo";
import { Toggle } from "../../Toggle/ToggleApollo";

describe("ContentItemDuoActionCommon Component", () => {
  it("renders correctly for mode 'toggle'", async () => {
    render(
      <ContentItemDuoActionCommon
        mode="toggle"
        contentItemProps={{
          type: "icon",
          title: "Icon Title",
          subtitle1: "Primary Subtitle",
          subtitle2: "Secondary Subtitle",
          icon: "test-icon.svg",
        }}
        ButtonComponent={Button}
        ContentItemMonoComponent={ContentItemMono}
        ToggleComponent={Toggle}
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
});
