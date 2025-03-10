import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import folderOpen from "@material-symbols/svg-400/outlined/folder_open-fill.svg";
import home from "@material-symbols/svg-400/outlined/home-fill.svg";
import personIcon from "@material-symbols/svg-400/outlined/person-fill.svg";
import { ElementType } from "react";
import { Header } from "../Header";
import { BREAKPOINT } from "../../../utilities/constants";
import { Svg } from "../../../Svg";

describe("Header component", () => {
  let originalInnerWidth: number;

  const mocks = vi.hoisted(() => {
    return {
      SVGInjector: vi.fn(),
    };
  });

  vi.mock("@tanem/svg-injector", () => mocks);

  beforeAll(() => {
    originalInnerWidth = window.innerWidth;
  });

  afterAll(() => {
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      configurable: true,
      value: originalInnerWidth,
    });
  });

  it("renders logo", () => {
    render(<Header />);
    const logo = screen.getByAltText("");
    expect(logo).toBeInTheDocument();
  });

  it("renders NavBar when links are provided", () => {
    const links = [
      {
        id: 1,
        Wrapper: "a" as ElementType,
        props: {
          children: (
            <>
              <Svg src={home} aria-hidden />
              Home
            </>
          ),
          to: "/home",
        },
      },
      {
        id: 2,
        Wrapper: "a" as ElementType,
        props: {
          children: (
            <>
              <Svg src={folderOpen} aria-hidden />
              Mes dossiers
            </>
          ),
          to: "/folder",
        },
      },
    ];
    render(<Header links={links} />);

    const homeText = screen.getByText("Home");
    const foldersText = screen.getByText("Mes dossiers");

    expect(homeText).toBeInTheDocument();
    expect(foldersText).toBeInTheDocument();
  });

  it("renders ButtonClient when rightItem is an object and screen size is >= BREAKPOINT.MD", () => {
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      configurable: true,
      value: BREAKPOINT.MD + 1,
    });
    const rightItems = [
      {
        id: 3,
        Wrapper: "a" as ElementType,
        props: {
          children: (
            <>
              <Svg src={personIcon} aria-hidden />
              Mon profil
            </>
          ),
          to: "/profile",
        },
      },
    ];
    render(<Header rightItems={rightItems} />);
    const profileButton = screen.getByText("Mon profil");
    expect(profileButton).toBeInTheDocument();
  });

  it("renders Svg menu icon when rightItem is an object and screen size is <= BREAKPOINT.MD", async () => {
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      configurable: true,
      value: BREAKPOINT.MD - 1,
    });

    mocks.SVGInjector.mockImplementationOnce((el, { afterEach }) => {
      afterEach(undefined, el);
    });

    const rightItems = [
      {
        id: 3,
        Wrapper: "a" as ElementType,
        props: {
          children: (
            <>
              <Svg src={personIcon} aria-hidden />
              Mon profil
            </>
          ),
          to: "/profile",
        },
      },
    ];

    const links = [
      {
        id: 1,
        Wrapper: "a" as ElementType,
        props: {
          children: (
            <>
              <Svg src={home} aria-hidden />
              Home
            </>
          ),
          to: "/home",
        },
      },
      {
        id: 2,
        Wrapper: "a" as ElementType,
        props: {
          children: (
            <>
              <Svg src={folderOpen} aria-hidden />
              Mes dossiers
            </>
          ),
          to: "/folder",
        },
      },
    ];

    render(<Header links={links} rightItems={rightItems} />);

    const svg = screen.getByLabelText("burger menu icon");

    expect(svg).toBeInTheDocument();

    await userEvent.click(svg);

    const homeText = screen.getByText("Home");
    const foldersText = screen.getByText("Mes dossiers");
    const myProfileText = screen.getByText("Mon profil");

    expect(homeText).toBeInTheDocument();
    expect(foldersText).toBeInTheDocument();
    expect(myProfileText).toBeInTheDocument();
  });
});
