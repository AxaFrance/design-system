import { describe, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { ItemFile, itemFileVariants } from "../ItemFileLF";

describe("<ItemFile />", () => {
  test("should render component when loading", () => {
    render(
      <ItemFile
        title="IMG_879687880"
        subTitle="0.12"
        state={itemFileVariants.loading}
      />,
    );
    const itemFileTitle = screen.getByText("IMG_879687880");
    const itemFileSubTitle = screen.getByText("0.12");
    const itemTitleState = document.querySelector(
      '[aria-label="Chargement en cours"]',
    );

    expect(itemFileTitle).toBeInTheDocument();
    expect(itemFileSubTitle).toBeInTheDocument();
    expect(itemTitleState).toBeInTheDocument();
  });

  it("renders the component with error", () => {
    const { container } = render(
      <ItemFile
        title="IMG_879687880"
        subTitle="0.12"
        state={itemFileVariants.error}
        errorMessage="Titre du message"
      />,
    );

    expect(container.querySelector(".af-item-file")).toHaveClass(
      "af-item-file--error",
    );
  });

  it("renders the component with success", () => {
    const { container } = render(
      <ItemFile
        title="IMG_879687880"
        subTitle="0.12"
        state={itemFileVariants.success}
      />,
    );

    expect(container.querySelector("svg")).toHaveClass("af-icon__success");
  });

  it("shouldn't have an accessibility violation", async () => {
    const { container } = render(
      <ItemFile
        state={itemFileVariants.success}
        subTitle="0.12"
        title="IMG_879687880"
        visibilityIconProps={{ "aria-label": "visibility" }}
        deleteIconProps={{ "aria-label": "delete" }}
      />,
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});
