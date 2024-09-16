import { render } from "@testing-library/react";
import { FileInput } from "../FileInput";
import { MessageTypes } from "../../../core";

describe("<FileInput>", () => {
  it("renders FileInput correctly", () => {
    const { asFragment } = render(
      <FileInput
        label="File *"
        id="id"
        name="file"
        onChange={() => {}}
        accept="image/jpeg, image/png, application/*"
        messageType={MessageTypes.error}
        message={null}
      />,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
