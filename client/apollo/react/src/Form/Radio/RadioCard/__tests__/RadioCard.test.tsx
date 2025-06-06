import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import homeIcons from "@material-symbols/svg-400/outlined/home.svg";
import { axe } from "jest-axe";
import { RadioCard } from "../RadioCardApollo";

describe("Radio card Component", () => {
  const args = {
    options: [
      {
        label: "Paris",
        description: "Capitale de la France",
        subtitle: "Nord",
        name: "paris",
        value: "paris",
        icon: homeIcons,
      },
    ],
  };

  it("should render the Radio card component with label", () => {
    // Act
    render(<RadioCard type="vertical" {...args} />);

    // Then
    expect(screen.getByRole("radio")).toBeInTheDocument();
    expect(screen.getByText("Paris")).toBeInTheDocument();
  });

  it("calls the onChange handler when clicked", () => {
    const handleChange = vi.fn();
    render(<RadioCard type="vertical" {...args} onChange={handleChange} />);

    const radioInput = screen.getByRole("radio");
    radioInput.click();

    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it("should violate accessibility the of radio card", async () => {
    // Act
    const { container } = render(<RadioCard type="vertical" {...args} />);

    // Then
    expect(await axe(container)).toHaveNoViolations();
  });
});
