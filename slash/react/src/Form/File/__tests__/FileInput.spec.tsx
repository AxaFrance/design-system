import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
import { MessageTypes } from "../../core";
import { FilePreview } from "../File";
import { FileInput } from "../FileInput";

const values = [
  {
    id: "000003",
    file: {
      name: "error-file.jpg",
      size: 100,
      preview: "https://via.placeholder.com/150Cx50",
      type: "image",
    } as FilePreview,
  },
];

describe("<FileInput>", () => {
  it("renders FileInput correctly and handles delete file action", async () => {
    const handleChange = vi.fn();

    render(
      <FileInput
        label="File"
        id="id"
        name="file"
        values={values}
        onChange={handleChange}
        accept="image/jpeg, image/png, application/*"
        messageType={MessageTypes.error}
      />,
    );
    userEvent.click(screen.getByRole("button", { name: "Supprimer" }));
    await waitFor(() => {
      expect(handleChange).toHaveBeenCalledWith(
        expect.objectContaining({
          fileAction: "delete",
          id: "id",
          name: "file",
          values: [],
        }),
      );
    });
  });

  it("renders FileInput correctly and handles add file action", async () => {
    const handleChange = vi.fn();
    const user = userEvent.setup();
    render(
      <FileInput
        label="File"
        id="id"
        data-testid="file"
        name="file"
        type="file"
        fileLabel="file"
        values={values}
        onChange={handleChange}
        accept="image/jpeg, image/png, application/*"
        messageType={MessageTypes.error}
      />,
    );
    const mockFile = new File(["hello"], "hello.png", { type: "image/png" });
    const input = screen.getByLabelText("File");

    await user.upload(input, mockFile).finally(() => SubmitEvent);
    await waitFor(() => {
      expect(handleChange).toHaveBeenCalledWith(
        expect.objectContaining({
          fileAction: "add",
          id: "id",
          name: "file",
          errors: [],
        }),
      );
    });
  });

  it("should render element right to input", () => {
    // Act
    render(
      <FileInput
        label="File *"
        id="id"
        name="file"
        onChange={() => {}}
        accept="image/jpeg, image/png, application/*"
        rightElement="Content"
      />,
    );

    // Assert
    expect(screen.getByText(/content/i)).toBeInTheDocument();
  });

  it("shouldn't have an accessibility violation", async () => {
    // Act
    const { container } = render(
      <FileInput
        label="File *"
        id="id"
        name="file"
        onChange={() => {}}
        accept="image/jpeg, image/png, application/*"
      />,
    );

    // Assert
    expect(await axe(container)).toHaveNoViolations();
  });
});
