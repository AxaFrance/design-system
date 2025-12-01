import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import userEvent from "@testing-library/user-event";
import villaIcon from "@material-symbols/svg-400/outlined/villa.svg";
import { Card } from "../Card";

const user = userEvent.setup();
describe("Card button", () => {
  it("have accessible name based on the content", () => {
    // Act
    render(<Card>Contenu</Card>);

    // Assert
    expect(screen.getByRole("button")).toHaveAccessibleName(/contenu/i);
    expect(screen.queryByRole("presentation")).not.toBeInTheDocument();
  });

  it("have icon display", () => {
    // Act
    render(<Card iconSrc={villaIcon}>Contenu</Card>);

    // Assert
    expect(screen.getByRole("button")).toHaveAccessibleName(/contenu/i);
    expect(screen.getByRole("presentation")).toBeInTheDocument();
  });

  it("shouldn't have an accessibility violation", async () => {
    // Act
    const { container } = render(<Card>Contenu</Card>);

    // Assert
    expect(await axe(container)).toHaveNoViolations();

    await user.click(screen.getByRole("button"));
    expect(await axe(container)).toHaveNoViolations();
  });

  it("shouldn't have an accessibility violation on horizontal mode with icon", async () => {
    // Act
    const { container } = render(
      <Card iconSrc={villaIcon} orientation="horizontal">
        Contenu
      </Card>,
    );

    // Assert
    expect(await axe(container)).toHaveNoViolations();
  });

  it("shouldn't have an accessibility violation with icon and disabled", async () => {
    // Act
    const { container } = render(
      <Card iconSrc={villaIcon} disabled>
        Contenu
      </Card>,
    );

    // Assert
    expect(await axe(container)).toHaveNoViolations();
  });

  it("shouldn't have an accessibility violation on error", async () => {
    // Act
    const { container } = render(
      <Card iconSrc={villaIcon} error>
        Contenu
      </Card>,
    );

    // Assert
    expect(await axe(container)).toHaveNoViolations();
  });
});
