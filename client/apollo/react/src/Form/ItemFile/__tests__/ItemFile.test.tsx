import { describe, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { ItemFile } from "../ItemFileApollo";
import { itemFileVariants } from "../ItemFileCommon";

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
    const itemTitleState = screen.getByLabelText("Chargement en cours");

    expect(itemFileTitle).toBeInTheDocument();
    expect(itemFileSubTitle).toBeInTheDocument();
    expect(itemTitleState).toBeInTheDocument();
  });

  it("renders the component with error", () => {
    render(
      <ItemFile
        errorMessage="my error message"
        title="IMG_879687880"
        subTitle="0.12"
        state={itemFileVariants.error}
        ariaLabelDelete="Item File error"
      />,
    );
    const itemFileClickIcon = screen.getAllByRole("button", {
      name: "Item File error",
    });
    expect(itemFileClickIcon[0]).toBeInTheDocument();
    const itemFileErrorLabelText = screen.getByText("my error message");
    expect(itemFileErrorLabelText).toBeInTheDocument();
  });

  it("renders the component with success", () => {
    const { container } = render(
      <ItemFile
        title="IMG_879687880"
        subTitle="0.12"
        state={itemFileVariants.success}
        ariaLabelVisibility="Observer le fichier"
        ariaLabelDelete="Suppression du fichier"
      />,
    );
    const itemFileVisibility = screen.getAllByRole("button", {
      name: "Observer le fichier",
    });
    const itemFileDelete = screen.getAllByRole("button", {
      name: "Suppression du fichier",
    });
    expect(itemFileVisibility[0]).toBeInTheDocument();
    expect(itemFileDelete[0]).toBeInTheDocument();
    expect(container.querySelector("svg")).toHaveClass("af-icon__success");
  });

  it("shouldn't have an accessibility violation", async () => {
    const { container } = render(
      <ItemFile
        state={itemFileVariants.success}
        subTitle="0.12"
        title="IMG_879687880"
        ariaLabelVisibility="Observer le fichier"
        ariaLabelDelete="Suppression du fichier"
      />,
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});
