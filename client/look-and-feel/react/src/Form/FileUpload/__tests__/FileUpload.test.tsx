import { render, screen } from "@testing-library/react";
import { expect, describe, it, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { FileUpload } from "../FileUpload";

describe("FileUpload Component", () => {
  const mockOnView = vi.fn();
  const mockOnDelete = vi.fn();

  const defaultProps = {
    id: "file-upload",
    label: "Upload your files",
    buttonLabel: "Choose File",
    dropzoneDescription: "Drag and drop files here, or click to select.",
    required: true,
    files: [
      { id: "1", name: "file1.txt", size: 12345, isLoading: false },
      { id: "2", name: "file2.jpg", size: 67890, isLoading: true },
    ],
    errors: [],
    globalError: "",
    onView: mockOnView,
    onDelete: mockOnDelete,
  };

  it("renders the component with the correct label and button", () => {
    render(<FileUpload {...defaultProps} />);

    expect(screen.getByLabelText(/Upload your files/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Choose File/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Drag and drop files here, or click to select./i),
    ).toBeInTheDocument();
  });

  it("displays the list of uploaded files", () => {
    render(<FileUpload {...defaultProps} />);

    const fileItems = screen.getAllByRole("listitem");
    expect(fileItems).toHaveLength(2);
    expect(screen.getByText(/file1.txt/i)).toBeInTheDocument();
    expect(screen.getByText(/file2.jpg/i)).toBeInTheDocument();
  });

  it("calls onView when the view button is clicked", async () => {
    render(<FileUpload {...defaultProps} />);

    const viewButton = screen.getAllByRole("button", {
      name: /Visualiser/i,
    })[0];
    await userEvent.click(viewButton);

    expect(mockOnView).toHaveBeenCalledWith("1");
  });

  it("calls onDelete when the delete button is clicked", async () => {
    render(<FileUpload {...defaultProps} />);

    const deleteButton = screen.getAllByRole("button", {
      name: /Supprimer/i,
    })[0];
    await userEvent.click(deleteButton);

    expect(mockOnDelete).toHaveBeenCalledWith("1");
  });

  it("displays an error message when globalError is passed", () => {
    const errorProps = {
      ...defaultProps,
      globalError: "There was an error uploading your files.",
    };

    render(<FileUpload {...errorProps} />);

    expect(
      screen.getByText(/There was an error uploading your files./i),
    ).toBeInTheDocument();
  });

  it("displays an error message for specific files", () => {
    const errorProps = {
      ...defaultProps,
      errors: [{ id: "1", message: "Error uploading file1.txt" }],
    };

    render(<FileUpload {...errorProps} />);

    expect(screen.getByText(/Error uploading file1.txt/i)).toBeInTheDocument();
  });
});
