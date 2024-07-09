import { render, screen } from "@testing-library/react";
import { ClickList } from "..";

describe("ClickList", () => {
  const items = [
    { id: "1", label: "Item 1", icon: <span>Icon 1</span> },
    { id: "2", label: "Item 2", icon: <span>Icon 2</span> },
    { id: "3", label: "Item 3", icon: <span>Icon 3</span> },
  ];

  it("should render labels and icons from items array", () => {
    render(<ClickList items={items} />);

    items.forEach((item) => {
      expect(screen.getByText(item.icon.props.children)).toBeInTheDocument();
      expect(screen.getByText(item.label)).toBeInTheDocument();
    });
    expect(screen.getAllByRole("separator")).toHaveLength(2);
  });
});
