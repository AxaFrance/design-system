import { render } from "@testing-library/react";
import { axe } from "jest-axe";
import { MessageTypes } from "../../core";
import { MultiSelectInput } from "../MultiSelectInput";
import { options, values } from "./MultiSelect.spec";

describe("MultiSelectInput", () => {
  it("shouldn't have an accessibility violation <Select />", async () => {
    // Act
    const { container } = render(
      <MultiSelectInput
        label="Place type *"
        name="placeType"
        id="multiselectid"
        options={options}
        onChange={vi.fn()}
        values={values}
        helpMessage="Enter the place type"
        messageType={MessageTypes.error}
      />,
    );

    // Assert
    expect(await axe(container)).toHaveNoViolations();
  });
});
