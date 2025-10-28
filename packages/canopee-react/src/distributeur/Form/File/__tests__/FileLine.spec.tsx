import { fireEvent, render } from "@testing-library/react";
import { FileLine } from "../FileLine";
import { FilePreview } from "../File";

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
});
