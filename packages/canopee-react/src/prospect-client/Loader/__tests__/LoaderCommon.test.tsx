import { render, screen } from "@testing-library/react";
import { createRef } from "react";
import { describe, it, expect } from "vitest";
import { axe } from "jest-axe";
import { LoaderCommon } from "../LoaderCommon";
import { Spinner } from "../../Spinner/SpinnerApollo";

describe("LoaderCommon", () => {
  it("renders with title and subtitle", () => {
    render(
      <LoaderCommon
        title="Chargement"
        subtitle="Veuillez patienter"
        SpinnerComponent={Spinner}
      />,
    );
    expect(screen.getByText("Chargement")).toBeInTheDocument();
    expect(screen.getByText("Veuillez patienter")).toBeInTheDocument();
  });

  it("renders without subtitle", () => {
    render(<LoaderCommon title="Chargement" SpinnerComponent={Spinner} />);
    expect(screen.getByText("Chargement")).toBeInTheDocument();
    expect(screen.queryByText("Veuillez patienter")).toBeNull();
  });

  it("links title to component via aria-labelledby", () => {
    const { container } = render(
      <LoaderCommon title="Chargement" SpinnerComponent={Spinner} />,
    );
    const titleElement = screen.getByText("Chargement");
    const titleId = titleElement.getAttribute("id");
    expect(titleId).toBeTruthy();
    expect(container.firstChild).toHaveAttribute("aria-labelledby", titleId);
  });

  it("merges custom classes", () => {
    const { container } = render(
      <LoaderCommon
        title="Chargement"
        className="custom-class"
        SpinnerComponent={Spinner}
      />,
    );
    expect(container.firstChild).toHaveClass("af-loader");
    expect(container.firstChild).toHaveClass("custom-class");
  });

  it("renders as dialog when isDialog is true", () => {
    const { container } = render(
      <LoaderCommon title="Chargement" isDialog SpinnerComponent={Spinner} />,
    );
    expect(container.querySelector("dialog")).toBeInTheDocument();
  });

  it("renders as article by default", () => {
    const { container } = render(
      <LoaderCommon title="Chargement" SpinnerComponent={Spinner} />,
    );
    expect(container.querySelector("article")).toBeInTheDocument();
  });

  it("forwards ref to the root element", () => {
    const ref = createRef<HTMLElement>();
    render(
      <LoaderCommon ref={ref} title="Chargement" SpinnerComponent={Spinner} />,
    );
    expect(ref.current).toBeInstanceOf(HTMLElement);
    expect(ref.current).toHaveClass("af-loader");
  });

  it("should have no accessibility violations", async () => {
    const { container } = render(
      <LoaderCommon title="Chargement" SpinnerComponent={Spinner} />,
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});
