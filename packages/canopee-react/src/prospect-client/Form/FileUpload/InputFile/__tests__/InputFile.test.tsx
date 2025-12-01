/* eslint-disable react/no-multi-comp */
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import {
  ButtonCommon,
  type ButtonProps,
} from "../../../../Button/ButtonCommon";
import { Spinner } from "../../../../Spinner/SpinnerCommon";
import {
  ItemLabelCommon,
  type ItemLabelProps,
} from "../../../ItemLabel/ItemLabelCommon";
import { ItemMessage } from "../../../ItemMessage/ItemMessageCommon";
import { InputFileCommon, type InputFileProps } from "../InputFileCommon";

const ButtonMock = (props: ButtonProps) => (
  <ButtonCommon {...props} SpinnerComponent={Spinner} />
);

const ItemLabel = (props: ItemLabelProps) => (
  <ItemLabelCommon {...props} ButtonComponent={ButtonMock} />
);

const InputFile = (props: InputFileProps) => (
  <InputFileCommon
    {...props}
    ItemLabelComponent={ItemLabel}
    ItemMessageComponent={ItemMessage}
  />
);

describe("InputFile", () => {
  describe("Basic rendering", () => {
    it("should render file input with default dropzone labels", () => {
      render(<InputFile label="Upload document" />);

      expect(screen.getByText("Upload document")).toBeInTheDocument();
      expect(screen.getByLabelText("Upload document")).toBeInTheDocument();
      expect(
        screen.getByText("Glisser et déposer un fichier"),
      ).toBeInTheDocument();
      expect(screen.getByText("ou")).toBeInTheDocument();
      expect(screen.getByText("Importer fichier")).toBeInTheDocument();
    });

    it("should render with custom dropzone labels", () => {
      const customLabels = {
        dropzone: "Drag your file here",
        or: "or",
        button: "Browse files",
      };

      render(
        <InputFile label="Upload document" dropzoneLabels={customLabels} />,
      );

      expect(screen.getByText("Drag your file here")).toBeInTheDocument();
      expect(screen.getByText("or")).toBeInTheDocument();
      expect(screen.getByText("Browse files")).toBeInTheDocument();
    });

    it("should render with description and helper text", () => {
      render(
        <InputFile
          label="Upload document"
          description="Phone bill, EDF receipt, etc."
          helper="Maximum file size: 5MB"
        />,
      );

      expect(
        screen.getByText("Phone bill, EDF receipt, etc."),
      ).toBeInTheDocument();
      expect(screen.getByText("Maximum file size: 5MB")).toBeInTheDocument();
    });
  });

  describe("Accessibility", () => {
    it("should have proper accessibility attributes", () => {
      render(<InputFile label="Upload document" />);

      const input = screen.getByLabelText("Upload document");

      expect(input).toHaveAccessibleName("Upload document");
      expect(input).toHaveAttribute("type", "file");
    });

    it("should associate helper text with input via aria-describedby", () => {
      render(
        <InputFile label="Upload document" helper="Maximum file size: 5MB" />,
      );

      const input = screen.getByLabelText("Upload document");

      expect(input).toHaveAccessibleDescription("Maximum file size: 5MB");
    });

    it("should have required attribute when required prop is true", () => {
      render(<InputFile label="Upload document" required />);

      const input = screen.getByLabelText(/Upload document/);

      expect(input).toBeRequired();
      expect(screen.getByText(/Upload document/)).toHaveTextContent("*");
    });
  });

  describe("Error handling and messages", () => {
    it("should display error message", () => {
      render(
        <InputFile label="Upload document" message="File size too large" />,
      );

      const input = screen.getByLabelText("Upload document");
      expect(input).toHaveAccessibleErrorMessage("File size too large");

      const errorMessage = screen.getByText("File size too large");
      expect(errorMessage).toBeInTheDocument();
    });

    it("should display success message", () => {
      render(
        <InputFile
          label="Upload document"
          message="File uploaded successfully"
          messageType="success"
        />,
      );

      const successMessage = screen.getByText("File uploaded successfully");
      expect(successMessage).toBeInTheDocument();
    });

    it("should associate success message with input via aria-describedby", () => {
      render(
        <InputFile
          label="Upload document"
          message="File uploaded successfully"
          messageType="success"
        />,
      );

      const input = screen.getByLabelText("Upload document");
      const describedBy = input.getAttribute("aria-describedby");

      expect(describedBy).toContain("message");
    });
  });

  describe("File input interactions", () => {
    it("should accept file selection", async () => {
      const onChange = vi.fn();
      const user = userEvent.setup();

      render(<InputFile label="Upload document" onChange={onChange} />);

      const input = screen.getByLabelText(
        "Upload document",
      ) as HTMLInputElement;
      const file = new File(["test content"], "test.txt", {
        type: "text/plain",
      });

      await user.upload(input, file);

      expect(onChange).toHaveBeenCalled();
      expect(input.files).toHaveLength(1);
      expect(input.files?.[0]).toBe(file);
    });

    it("should accept multiple files when multiple prop is true", async () => {
      const onChange = vi.fn();
      const user = userEvent.setup();

      render(
        <InputFile label="Upload documents" multiple onChange={onChange} />,
      );

      const input = screen.getByLabelText(
        "Upload documents",
      ) as HTMLInputElement;
      const files = [
        new File(["content1"], "test1.txt", { type: "text/plain" }),
        new File(["content2"], "test2.txt", { type: "text/plain" }),
      ];

      await user.upload(input, files);

      expect(onChange).toHaveBeenCalled();
      expect(input.files).toHaveLength(2);
    });

    it("should respect accept attribute for file types", () => {
      render(<InputFile label="Upload image" accept="image/*" />);

      const input = screen.getByLabelText("Upload image");
      expect(input).toHaveAttribute("accept", "image/*");
    });
  });
});
