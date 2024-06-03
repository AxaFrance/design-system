import { render } from "@testing-library/react";
import { MessageTypes } from "../../core";
import { MultiSelectInput } from "../MultiSelectInput";
import { options, values } from "./MultiSelect.spec";

test("renders MultiSelectInput correctly", () => {
  const { asFragment } = render(
    <MultiSelectInput
      label="Place type *"
      name="placeType"
      id="multiselectid"
      options={options}
      onChange={vi.fn()}
      values={values}
      helpMessage="Enter the place type"
      message={null}
      messageType={MessageTypes.error}
    />,
  );
  expect(asFragment()).toMatchSnapshot();
});
