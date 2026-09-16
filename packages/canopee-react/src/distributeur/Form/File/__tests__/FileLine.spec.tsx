import { fireEvent, render } from "@testing-library/react";
import type { FilePreview } from "../File";
import { FileLine } from "../FileLine";

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
});
