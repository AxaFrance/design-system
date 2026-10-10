import { act, render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
import { Footer, type FooterProps } from "../FooterCommon";
import { Footer as FooterApollo } from "../FooterApollo";
import { Footer as FooterLF } from "../FooterLF";

const links = [
  { text: "About", link: "/about" },
  { text: "Contact", link: "/contact" },
];

const socialMedias = [
  { icon: "twitter", link: "https://twitter.com" },
  { icon: "linkedin", link: "https://linkedin.com" },
] as FooterProps["socialMedias"];

const setScreenWidth = (width: number) => {
  Object.defineProperty(globalThis, "innerWidth", {
    configurable: true,
    writable: true,
    value: width,
  });
};

describe("Footer", () => {
  it("renders copyright text", () => {
    render(
      <Footer links={links} copyright="© 2024 AXA" expandLinkText="More" />,
    );
    expect(screen.getByText("© 2024 AXA")).toBeInTheDocument();
    expect(screen.getByText("More")).toBeInTheDocument();
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Contact")).toBeInTheDocument();
  });

  it("renders social media icons if provided", () => {
    render(
      <Footer
        links={links}
        socialMedias={socialMedias}
        copyright="© 2024 AXA"
        expandLinkText="More"
      />,
    );
    expect(
      screen.getByRole("link", { name: "X (Twitter) (nouvelle fenêtre)" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "LinkedIn (nouvelle fenêtre)" }),
    ).toBeInTheDocument();
  });
});

describe.each([
  ["Apollo", FooterApollo],
  ["LF", FooterLF],
])("<Footer /> %s disclosure", (_, FooterComponent) => {
  afterEach(() => {
    setScreenWidth(1024);
  });

  it("should expose the expanded state and the list it controls", async () => {
    const user = userEvent.setup();
    render(
      <FooterComponent
        links={links}
        copyright="© 2024 AXA"
        expandLinkText="À propos"
      />,
    );

    const trigger = screen.getByRole("button", { name: "À propos" });
    const list = screen.getByRole("list");
    expect(list.id).not.toBe("");
    expect(trigger).toHaveAttribute("aria-controls", list.id);
    expect(trigger).toHaveAttribute("aria-expanded", "false");

    await user.click(trigger);

    expect(trigger).toHaveAttribute("aria-expanded", "true");
  });

  it("should make the collapsed links inert on small screens", async () => {
    setScreenWidth(375);
    const user = userEvent.setup();
    const { container } = render(
      <FooterComponent
        links={links}
        copyright="© 2024 AXA"
        expandLinkText="À propos"
      />,
    );

    const list = screen.getByRole("list");
    expect(list).toHaveAttribute("inert");
    within(list)
      .getAllByRole("link")
      .forEach((link) => {
        expect(link).not.toHaveAttribute("tabindex");
      });
    expect(await axe(container)).toHaveNoViolations();

    await user.click(screen.getByRole("button", { name: "À propos" }));

    expect(list).not.toHaveAttribute("inert");
    expect(await axe(container)).toHaveNoViolations();
  });

  it("should move the focus to the button when the list collapses around it", () => {
    render(
      <FooterComponent
        links={links}
        copyright="© 2024 AXA"
        expandLinkText="À propos"
      />,
    );
    within(screen.getByRole("list")).getAllByRole("link")[0].focus();

    act(() => {
      setScreenWidth(375);
      globalThis.dispatchEvent(new Event("resize"));
    });

    expect(screen.getByRole("list")).toHaveAttribute("inert");
    expect(screen.getByRole("button", { name: "À propos" })).toHaveFocus();
  });

  it("should keep the links reachable on large screens", () => {
    render(
      <FooterComponent
        links={links}
        copyright="© 2024 AXA"
        expandLinkText="À propos"
      />,
    );

    expect(screen.getByRole("list")).not.toHaveAttribute("inert");
  });

  it("should not point to a missing list when there is no link", () => {
    render(
      <FooterComponent
        links={[]}
        copyright="© 2024 AXA"
        expandLinkText="À propos"
      />,
    );

    expect(
      screen.getByRole("button", { name: "À propos" }),
    ).not.toHaveAttribute("aria-controls");
  });
});

describe.each([
  ["Apollo", FooterApollo],
  ["LF", FooterLF],
])("<Footer /> %s social links", (_, FooterComponent) => {
  it("should name the social links from their content", async () => {
    const { container } = render(
      <FooterComponent
        links={[]}
        socialMedias={[
          { icon: "facebook", link: "https://facebook.com" },
          { icon: "twitter", link: "https://twitter.com" },
          { icon: "youtube", link: "https://youtube.com" },
          { icon: "linkedin", link: "https://linkedin.com" },
        ]}
        copyright="© 2024 AXA"
        expandLinkText="À propos"
      />,
    );

    ["Facebook", "X (Twitter)", "YouTube", "LinkedIn"].forEach((label) => {
      const name = `${label} (nouvelle fenêtre)`;
      const link = screen.getByRole("link", { name });
      expect(link).not.toHaveAttribute("aria-label");
      expect(within(link).getByRole("img")).toHaveAccessibleName(name);
    });
    expect(await axe(container)).toHaveNoViolations();
  });

  it("should name a social link from its label", () => {
    render(
      <FooterComponent
        links={[]}
        socialMedias={[
          {
            icon: "facebook",
            link: "https://facebook.com",
            label: "AXA sur Facebook",
          },
        ]}
        copyright="© 2024 AXA"
        expandLinkText="À propos"
      />,
    );

    expect(screen.getByRole("link")).toHaveAccessibleName(
      "AXA sur Facebook (nouvelle fenêtre)",
    );
  });
});
