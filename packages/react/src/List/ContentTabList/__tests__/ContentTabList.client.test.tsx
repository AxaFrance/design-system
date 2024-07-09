import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ContentTabList } from "../ContentTabList.client";

describe("ContentTabList", () => {
  const items = [
    {
      id: "1",
      title: "Title 1",
      subtitle: "Subtitle 1",
      tag: "Tag 1",
      date: "Date 1",
      onDownload: vi.fn(),
      onDisplay: vi.fn(),
    },
    {
      id: "2",
      title: "Title 2",
      subtitle: "Subtitle 2",
      tag: "Tag 2",
      date: "Date 2",
      value: "Value 2",
    },
    {
      id: "3",
      title: "Title 3",
      value: "Value 3",
    },
    {
      title: "Title 4",
    },
  ];

  it("should render the list items correctly", () => {
    render(<ContentTabList items={items} />);

    expect(screen.getByText("Title 1")).toBeInTheDocument();
    expect(screen.getByText("Subtitle 1")).toBeInTheDocument();
    expect(screen.getByText("Tag 1")).toBeInTheDocument();
    expect(screen.getByText("Date 1")).toBeInTheDocument();

    expect(screen.getByText("Title 2")).toBeInTheDocument();
    expect(screen.getByText("Subtitle 2")).toBeInTheDocument();
    expect(screen.getByText("Tag 2")).toBeInTheDocument();
    expect(screen.getByText("Date 2")).toBeInTheDocument();
    expect(screen.getByText("Value 2")).toBeInTheDocument();

    expect(screen.getByText("Title 3")).toBeInTheDocument();
    expect(screen.getByText("Value 3")).toBeInTheDocument();

    expect(screen.getByText("Title 4")).toBeInTheDocument();
  });

  it("should call onDownload when download button is clicked", async () => {
    render(<ContentTabList items={items} />);

    await userEvent.click(screen.getByRole("button", { name: /Télécharger$/ }));

    expect(items[0].onDownload).toHaveBeenCalled();
  });

  it("should call onDisplay when display button is clicked", async () => {
    render(<ContentTabList items={items} />);

    await userEvent.click(screen.getByRole("button", { name: /Afficher$/ }));

    expect(items[0].onDisplay).toHaveBeenCalled();
  });
});
