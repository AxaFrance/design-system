import { render, screen } from "@testing-library/react";
import { File } from "../File";

describe("<File.File>", () => {
  it("renders File.File correctly", () => {
    const { asFragment } = render(
      <File
        label="File *"
        id="id"
        name="file"
        onChange={() => {}}
        accept="image/jpeg, image/png, application/*"
        multiple
      />,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("hides the browse button icon", () => {
    render(<File id="id" name="file" onChange={() => {}} />);

    const button = screen.getByRole("button", { name: "Parcourir" });
    expect(button.querySelector(".glyphicon-open")).toHaveAttribute(
      "aria-hidden",
      "true",
    );
  });
});
