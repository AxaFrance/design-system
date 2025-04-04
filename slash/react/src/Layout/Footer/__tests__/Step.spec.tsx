import { render } from "@testing-library/react";
import { Footer } from "..";

describe("<Footer>", () => {
  it("renders Footer correctly", () => {
    const { asFragment } = render(<Footer version="1.38.0" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
