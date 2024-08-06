import download from "@material-symbols/svg-400/rounded/download_2-fill.svg";
import visibility from "@material-symbols/svg-400/rounded/visibility-fill.svg";
import { render, screen } from "@testing-library/react";
import { ButtonVariants, Svg } from "../../../client";
import type { TContentTabItem } from "../ContentTabItem";
import { ContentTabList } from "../ContentTabList.client";

describe("ContentTabList", () => {
  const items: TContentTabItem[] = [
    {
      id: "1",
      title: "Title 1",
      subtitle: "Subtitle 1",
      tag: "Tag 1",
      date: "Date 1",
      buttons: [
        {
          id: "download_button",
          children: "Télécharger",
          variant: ButtonVariants.ghost,
          iconLeft: <Svg src={download} fill="#00008F" />,
          onClick: vi.fn(),
        },
        {
          id: "display_button",
          children: "Afficher",
          variant: ButtonVariants.ghost,
          iconLeft: <Svg src={visibility} fill="#00008F" />,
          onClick: vi.fn(),
        },
      ],
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
      date: "Date 4",
    },
  ];

  it("should render the list correctly", () => {
    render(<ContentTabList items={items} />);

    expect(screen.getByText("Title 1")).toBeInTheDocument();
    expect(screen.getByText("Title 2")).toBeInTheDocument();
    expect(screen.getByText("Title 3")).toBeInTheDocument();
    expect(screen.getByText("Title 4")).toBeInTheDocument();
  });
});
