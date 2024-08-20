import download from "@material-symbols/svg-400/rounded/download_2-fill.svg";
import visibility from "@material-symbols/svg-400/rounded/visibility-fill.svg";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ContentTabItem, type TContentTabItem } from "..";
import { ButtonVariants, Svg } from "../../../../look-and-feel";

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
  let originalWidth: number;

  beforeEach(() => {
    originalWidth = window.innerWidth;
  });

  afterEach(() => {
    vi.stubGlobal("innerWidth", originalWidth);
  });

  it.each<TContentTabItem>(items)(
    "should render the items correctly",
    (item) => {
      render(<ContentTabItem {...item} />);

      expect(screen.getByText(item.title)).toBeInTheDocument();
      if (item.subtitle) {
        expect(screen.getByText(item.subtitle)).toBeInTheDocument();
      }
      if (item.tag) {
        expect(screen.getByText(item.tag)).toBeInTheDocument();
      }
      if (item.date) {
        expect(screen.getByText(item.date)).toBeInTheDocument();
      }
      if (item.value) {
        expect(screen.getByText(item.value)).toBeInTheDocument();
      }
    },
  );

  it.each<TContentTabItem>(items)(
    "should render the items correctly on mobile view",
    (item) => {
      render(<ContentTabItem {...item} isMobile />);

      expect(screen.getByText(item.title)).toBeInTheDocument();
      if (item.subtitle) {
        expect(screen.getByText(item.subtitle)).toBeInTheDocument();
      }
      if (item.tag) {
        expect(screen.getByText(item.tag)).toBeInTheDocument();
      }
      if (item.date) {
        expect(screen.getByText(item.date)).toBeInTheDocument();
      }
      if (item.value) {
        expect(screen.getByText(item.value)).toBeInTheDocument();
      }
    },
  );

  it("should call onDownload when download button is clicked", async () => {
    render(<ContentTabItem {...items[0]} />);

    await userEvent.click(screen.getByRole("button", { name: /Télécharger$/ }));

    expect(items?.[0]?.buttons?.[0].onClick).toHaveBeenCalled();
  });

  it("should call onDisplay when display button is clicked", async () => {
    render(<ContentTabItem {...items[0]} />);

    await userEvent.click(screen.getByRole("button", { name: /Afficher$/ }));

    expect(items?.[0]?.buttons?.[1].onClick).toHaveBeenCalled();
  });
});
