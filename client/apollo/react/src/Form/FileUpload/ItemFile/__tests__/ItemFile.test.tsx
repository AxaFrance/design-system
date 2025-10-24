import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { ClickIcon } from "../../../../ClickIcon/ClickIconCommon";
import { Icon } from "../../../../Icon/IconCommon";
import { Spinner } from "../../../../Spinner/SpinnerCommon";
import { ItemMessage } from "../../../ItemMessage/ItemMessageCommon";

import { ItemFileCommon, type ItemFileProps } from "../ItemFileCommon";

const ItemFile = (props: ItemFileProps) => (
  <ItemFileCommon
    ItemMessageComponent={ItemMessage}
    ItemIconComponent={Icon}
    ItemSpinnerComponent={Spinner}
    ClickIconComponent={ClickIcon}
    removeIcon="remove-icon.svg"
    previewIcon="preview-icon.svg"
    {...props}
  />
);

const mockFile = new File(["test content"], "test-document.pdf", {
  type: "application/pdf",
});

const mockLargeFile = new File([new Uint8Array(5_000_000)], "large-file.pdf", {
  type: "application/pdf",
});

describe("<ItemFile />", () => {
  it("should render file item with file name and size", () => {
    render(<ItemFile file={mockFile} />);

    expect(screen.getByText("test-document.pdf")).toBeInTheDocument();
    expect(screen.getByText("0.1 Ko")).toBeInTheDocument();
  });

  it("should display readable file sizes correctly", () => {
    render(<ItemFile file={mockLargeFile} />);

    expect(screen.getByText("5.0 Mo")).toBeInTheDocument();
  });

  it("should display spinner when isLoading is true", () => {
    render(<ItemFile file={mockFile} isLoading data-testid="test" />);

    const section = screen.getByTestId("test");
    expect(section).toHaveAttribute("aria-busy", "true");

    expect(screen.queryByRole("img")).not.toBeInTheDocument();
  });

  it("should hide preview button when loading", () => {
    render(<ItemFile file={mockFile} isLoading />);

    const previewButton = screen.queryByLabelText(/Previsualiser le fichier/);
    expect(previewButton).not.toBeInTheDocument();
  });

  it("should still show remove button when loading", () => {
    render(<ItemFile file={mockFile} isLoading />);

    const removeButton = screen.getByLabelText(/Suppression du fichier/);
    expect(removeButton).toBeInTheDocument();
  });

  it("should display error message when errorMessage is provided", () => {
    render(<ItemFile file={mockFile} errorMessage="File upload failed" />);

    expect(screen.getByText("File upload failed")).toBeInTheDocument();
  });

  it("should display error message when loading and errorMessage is provided", () => {
    render(
      <ItemFile file={mockFile} errorMessage="File upload failed" isLoading />,
    );

    expect(screen.getByText("File upload failed")).toBeInTheDocument();
  });

  it("should hide preview button when there is an error", () => {
    render(<ItemFile file={mockFile} errorMessage="File upload failed" />);

    const previewButton = screen.queryByLabelText(/Previsualiser le fichier/);
    expect(previewButton).not.toBeInTheDocument();
  });

  it("should still show remove button when there is an error", () => {
    render(<ItemFile file={mockFile} errorMessage="File upload failed" />);

    const removeButton = screen.getByLabelText(/Suppression du fichier/);
    expect(removeButton).toBeInTheDocument();
  });

  it("should show preview button when no error and not loading", () => {
    render(<ItemFile file={mockFile} />);

    const previewButton = screen.getByLabelText(
      /Previsualiser le fichier test-document.pdf/,
    );
    expect(previewButton).toBeInTheDocument();
  });

  it("should still show remove button when no error and not loading", () => {
    render(<ItemFile file={mockFile} />);

    const removeButton = screen.getByLabelText(/Suppression du fichier/);
    expect(removeButton).toBeInTheDocument();
  });

  it("should call onRemove when remove button is clicked", async () => {
    const onRemove = vi.fn();
    const user = userEvent.setup();

    render(<ItemFile file={mockFile} onRemove={onRemove} />);

    const removeButton = screen.getByLabelText(
      /Suppression du fichier test-document.pdf/,
    );
    await user.click(removeButton);

    expect(onRemove).toHaveBeenCalledTimes(1);
    expect(onRemove).toHaveBeenCalledWith(mockFile, expect.anything());
  });

  it("should call onPreview when preview button is clicked", async () => {
    const onPreview = vi.fn();
    const user = userEvent.setup();

    render(<ItemFile file={mockFile} onPreview={onPreview} />);

    const previewButton = screen.getByLabelText(
      /Previsualiser le fichier test-document.pdf/,
    );
    await user.click(previewButton);

    expect(onPreview).toHaveBeenCalledTimes(1);
    expect(onPreview).toHaveBeenCalledWith(mockFile, expect.anything());
  });

  it("should have accessible labels for action buttons", () => {
    const onRemove = vi.fn();
    const onPreview = vi.fn();

    render(
      <ItemFile file={mockFile} onRemove={onRemove} onPreview={onPreview} />,
    );

    expect(
      screen.getByLabelText("Suppression du fichier test-document.pdf"),
    ).toBeInTheDocument();
    expect(
      screen.getByLabelText("Previsualiser le fichier test-document.pdf"),
    ).toBeInTheDocument();
  });

  it("should pass custom props to preview button", () => {
    const onPreview = vi.fn();
    const previewProps = { className: "custom-preview-btn" };

    render(
      <ItemFile
        file={mockFile}
        onPreview={onPreview}
        previewProps={previewProps}
      />,
    );

    const previewButton = screen.getByLabelText(/Previsualiser le fichier/);
    expect(previewButton).toHaveClass("custom-preview-btn");
  });

  it("should pass custom props to remove button", () => {
    const onRemove = vi.fn();
    const removeProps = { className: "custom-remove-btn" };

    render(
      <ItemFile
        file={mockFile}
        onRemove={onRemove}
        removeProps={removeProps}
      />,
    );

    const removeButton = screen.getByLabelText(/Suppression du fichier/);
    expect(removeButton).toHaveClass("custom-remove-btn");
  });

  it("should pass additional section props", () => {
    render(
      <ItemFile
        file={mockFile}
        data-testid="custom-item-file"
        role="article"
      />,
    );

    const section = screen.getByTestId("custom-item-file");
    expect(section).toHaveAttribute("role", "article");
  });
});
