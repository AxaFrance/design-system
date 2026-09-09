import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { axe } from "jest-axe";
import userEvent from "@testing-library/user-event";
import { FileDownload } from "../FileDownload";

describe("FileDownload component", () => {
  it("should render with label", () => {
    const { container } = render(<FileDownload label="Mon document" />);

    expect(container.firstElementChild).toHaveClass("af-file-download");
    expect(
      screen.getByRole("heading", { name: "Mon document", level: 3 }),
    ).toBeInTheDocument();
    expect(screen.queryByRole("button", { name: "Consulter" })).toBeNull();
    expect(screen.queryByRole("button", { name: "Télécharger" })).toBeNull();
  });

  it("should append custom className without overriding default className", () => {
    const { container } = render(
      <FileDownload label="Mon document" className="custom-file-download" />,
    );

    expect(container.firstElementChild).toHaveClass(
      "af-file-download",
      "custom-file-download",
    );
  });

  it("should render subtitle only when provided", () => {
    const { rerender } = render(
      <FileDownload label="Mon document" fileName="mon-document.pdf" />,
    );

    expect(screen.getByText("mon-document.pdf")).toBeInTheDocument();

    rerender(<FileDownload label="Mon document" />);

    expect(screen.queryByText("mon-document.pdf")).toBeNull();
  });

  it("should render status only when provided", () => {
    const { rerender } = render(
      <FileDownload label="Mon document" status="En cours" />,
    );

    expect(screen.getByText("En cours")).toBeInTheDocument();

    rerender(<FileDownload label="Mon document" />);

    expect(screen.queryByText("En cours")).toBeNull();
  });

  it("should render consult and download actions when callbacks are provided", async () => {
    const onConsult = vi.fn(() => Promise.resolve());
    const onDownload = vi.fn(() => Promise.resolve());

    render(
      <FileDownload
        label="Mon document"
        onConsult={onConsult}
        onDownload={onDownload}
      />,
    );

    const consultButton = screen.getByRole("button", { name: "Consulter" });
    const downloadButton = screen.getByRole("button", { name: "Télécharger" });
    const user = userEvent.setup();

    await user.click(consultButton);
    await user.click(downloadButton);

    expect(onConsult).toHaveBeenCalledTimes(1);
    expect(onDownload).toHaveBeenCalledTimes(1);
  });

  it("should disable only the consult action when consultDisabled is true", async () => {
    const onConsult = vi.fn(() => Promise.resolve());
    const onDownload = vi.fn(() => Promise.resolve());

    render(
      <FileDownload
        label="Mon document"
        consultDisabled
        onConsult={onConsult}
        onDownload={onDownload}
      />,
    );

    const consultButton = screen.getByRole("button", { name: "Consulter" });
    const downloadButton = screen.getByRole("button", { name: "Télécharger" });
    const user = userEvent.setup();

    expect(consultButton).toBeDisabled();
    expect(downloadButton).toBeEnabled();

    await user.click(consultButton);
    await user.click(downloadButton);

    expect(onConsult).not.toHaveBeenCalled();
    expect(onDownload).toHaveBeenCalledTimes(1);
  });

  it("should disable only the download action when downloadDisabled is true", async () => {
    const onConsult = vi.fn(() => Promise.resolve());
    const onDownload = vi.fn(() => Promise.resolve());

    render(
      <FileDownload
        label="Mon document"
        downloadDisabled
        onConsult={onConsult}
        onDownload={onDownload}
      />,
    );

    const consultButton = screen.getByRole("button", { name: "Consulter" });
    const downloadButton = screen.getByRole("button", { name: "Télécharger" });
    const user = userEvent.setup();

    expect(consultButton).toBeEnabled();
    expect(downloadButton).toBeDisabled();

    await user.click(consultButton);
    await user.click(downloadButton);

    expect(onConsult).toHaveBeenCalledTimes(1);
    expect(onDownload).not.toHaveBeenCalled();
  });

  it("should render custom action labels", () => {
    render(
      <FileDownload
        label="Mon document"
        consultButtonLabel="Voir"
        downloadButtonLabel="Récupérer"
        onConsult={() => Promise.resolve()}
        onDownload={() => Promise.resolve()}
      />,
    );

    expect(screen.getByRole("button", { name: "Voir" })).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Récupérer" }),
    ).toBeInTheDocument();
    expect(screen.queryByRole("button", { name: "Consulter" })).toBeNull();
    expect(screen.queryByRole("button", { name: "Télécharger" })).toBeNull();
  });
});

describe("FileDownload accessibility", () => {
  it("should render with accessible heading", () => {
    render(<FileDownload label="Document Important" />);

    const heading = screen.getByRole("heading", {
      name: "Document Important",
      level: 3,
    });

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveAccessibleName();
  });

  it("should have accessible buttons", () => {
    const onConsult = vi.fn(() => Promise.resolve());
    const onDownload = vi.fn(() => Promise.resolve());

    render(
      <FileDownload
        label="Test"
        onConsult={onConsult}
        onDownload={onDownload}
      />,
    );

    const consultBtn = screen.getByRole("button", { name: "Consulter" });
    const downloadBtn = screen.getByRole("button", { name: "Télécharger" });

    expect(consultBtn).toHaveAccessibleName("Consulter");
    expect(downloadBtn).toHaveAccessibleName("Télécharger");
  });

  it("shouldn't have accessibility violations", async () => {
    const { container } = render(
      <FileDownload
        label="Test Document"
        fileName="test.pdf"
        status="En cours"
        onConsult={() => Promise.resolve()}
        onDownload={() => Promise.resolve()}
      />,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it("should handle button clicks without accessibility violations", async () => {
    const onConsult = vi.fn(() => Promise.resolve());
    const { container } = render(
      <FileDownload label="Test" onConsult={onConsult} />,
    );

    const user = userEvent.setup();
    const consultBtn = screen.getByRole("button", { name: "Consulter" });

    await user.click(consultBtn);

    expect(onConsult).toHaveBeenCalledTimes(1);
    expect(await axe(container)).toHaveNoViolations();
  });
});
