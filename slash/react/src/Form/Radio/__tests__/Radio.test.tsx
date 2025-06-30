import { render } from "@testing-library/react";
import villaIcon from "@material-symbols/svg-400/outlined/villa.svg";
import { Radio } from "../Radio";
import { Option } from "../../core";

describe("Radio", () => {
  it("should render card", () => {
    const options: Option[] = [
      {
        label: "Option 1",
        value: "1",
        icon: villaIcon,
      },
      {
        label: "Option 2",
        value: "2",
        icon: villaIcon,
      },
      {
        label: "Option 3",
        value: "3",
        icon: villaIcon,
        disabled: true,
      },
    ];
    render(
      <Radio mode="card" orientation="horizontal" options={options}>
        Test
      </Radio>,
    );
  });
});
