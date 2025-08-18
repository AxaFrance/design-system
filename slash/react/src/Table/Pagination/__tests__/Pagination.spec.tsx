import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { Li } from "../Li";

describe("Li", () => {
  test("should call onChange with the correct value when clicked", async () => {
    const onChange = vi.fn();
    render(
      <>
        <Li
          isVisible
          active={false}
          value={1}
          onChange={onChange}
          pageLinkLabel="éléments"
        />
        <Li
          isVisible
          active
          value={2}
          onChange={onChange}
          pageLinkLabel="éléments"
        />
        <Li
          isVisible
          active={false}
          value={3}
          onChange={onChange}
          pageLinkLabel="éléments"
        />
      </>,
    );
    const currentLink = screen.getByRole("link", { current: "page" });
    expect(currentLink).toHaveAccessibleName("Page 2 des éléments");
    const changedLink = screen.getByRole("link", {
      name: "Page 3 des éléments",
    });
    await userEvent.click(changedLink);
    expect(changedLink).toHaveAccessibleName("Page 3 des éléments");
    expect(onChange).toHaveBeenCalledWith({ value: 3 });
  });

  test("should have aria-current='page' when active", () => {
    const onChange = vi.fn();
    render(
      <Li
        isVisible
        active
        value={2}
        onChange={onChange}
        pageLinkLabel="éléments"
      />,
    );

    const activeLink = screen.getByRole("link", { current: "page" });
    expect(activeLink).toHaveAttribute("aria-current", "page");
  });
});
