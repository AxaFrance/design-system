import { fireEvent, render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import type { FilePreview } from "../File";
import { FileLine } from "../FileLine";
import { FileTable } from "../FileTable";

const createFile = (name: string, type = "application/pdf") =>
  ({
    ...new File([], name),
    name,
    size: 1,
    type,
    preview: "#",
  }) as FilePreview;

describe("<File.FileInput>", () => {
  it("renders File.FileInput correctly", () => {
    const { asFragment } = render(
      <FileLine
        file={
          {
            ...new File([], "name"),
            name: "name",
            size: 1,
            preview: "#",
          } as FilePreview
        }
        id="id"
        onClick={() => {}}
      />,
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it("Should called onClick function when button have been clicked", () => {
    const onClickMock = vi.fn();

    const { getByRole } = render(
      <FileLine
        file={
          {
            ...new File([], "name"),
            name: "name",
            size: 1,
            preview: "#",
          } as FilePreview
        }
        id="id"
        onClick={onClickMock}
      />,
    );
    fireEvent.click(getByRole("button"));
    expect(onClickMock).toHaveBeenCalled();
  });

  it("should append custom class to default class", () => {
    const { container } = render(
      <FileLine
        file={
          {
            ...new File([], "name"),
            name: "name",
            size: 1,
            preview: "#",
          } as FilePreview
        }
        id="id"
        className="custom-file-line"
        onClick={() => {}}
      />,
    );

    expect(container.querySelector("li")).toHaveClass(
      "af-form__file-line",
      "custom-file-line",
    );
  });

  describe("accessibility", () => {
    const renderTable = () =>
      render(
        <FileTable
          values={[
            { id: "1", file: createFile("contrat.pdf") },
            { id: "2", file: createFile("photo.png", "image/png") },
          ]}
          onClick={() => {}}
        />,
      );

    it("names each delete button after its file", () => {
      renderTable();

      expect(
        screen.getByRole("button", { name: "Supprimer contrat.pdf" }),
      ).toBeInTheDocument();
      expect(
        screen.getByRole("button", { name: "Supprimer photo.png" }),
      ).toBeInTheDocument();
    });

    it("hides the file type icons", () => {
      const { container } = renderTable();

      container.querySelectorAll("li .glyphicon").forEach((icon) => {
        expect(icon).toHaveAttribute("aria-hidden", "true");
      });
      expect(container.querySelectorAll("li .glyphicon")).toHaveLength(2);
    });

    it("has no accessibility violations", async () => {
      const { container } = renderTable();

      expect(await axe(container)).toHaveNoViolations();
    });
  });
});
