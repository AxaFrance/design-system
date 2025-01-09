import { render, screen } from "@testing-library/react";
import { ClickList } from "..";

describe("ClickList", () => {
  const items = [
    { id: "1", children: "Item 1", icon: <span>Icon 1</span> },
    { id: "2", children: "Item 2", icon: <span>Icon 2</span> },
    { id: "3", children: "Item 3", icon: <span>Icon 3</span> },
  ];

  it("should render labels and icons from items array", () => {
    render(<ClickList items={items} />);

    items.forEach((item) => {
      expect(screen.getByText(item.icon.props.children)).toBeInTheDocument();
      expect(screen.getByText(item.children)).toBeInTheDocument();
    });
  });
});
