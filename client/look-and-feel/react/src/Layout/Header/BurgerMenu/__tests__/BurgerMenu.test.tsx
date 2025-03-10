import { render, screen } from "@testing-library/react";
import folderOpen from "@material-symbols/svg-400/outlined/folder_open-fill.svg";
import home from "@material-symbols/svg-400/outlined/home-fill.svg";
import personIcon from "@material-symbols/svg-400/outlined/person-fill.svg";
import { ElementType } from "react";
import userEvent from "@testing-library/user-event";
import { BurgerMenu } from "../BurgerMenu";
import { Svg } from "../../../../Svg";

describe("BurgerMenu", () => {
  it("should render with links and right elements", async () => {
    const setActiveLink = vi.fn();
    const setIsOpen = vi.fn();
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
    render(
      <BurgerMenu
        isOpen
        links={links}
        rightItems={rightItems}
        setActiveLink={setActiveLink}
        setIsOpen={setIsOpen}
      />,
    );

    const homeText = screen.getByText("Home");
    const foldersText = screen.getByText("Mes dossiers");
    const myProfileText = screen.getByText("Mon profil");

    expect(homeText).toBeInTheDocument();
    expect(foldersText).toBeInTheDocument();
    expect(myProfileText).toBeInTheDocument();

    await userEvent.click(homeText);

    await userEvent.click(foldersText);

    await userEvent.click(myProfileText);

    expect(setActiveLink).toHaveBeenCalledTimes(2);
    expect(setIsOpen).toHaveBeenCalledTimes(2);
  });
});
