import { render, screen } from "@testing-library/react";
import { Footer, type FooterProps } from "../FooterCommon";

const links = [
  { text: "About", link: "/about" },
  { text: "Contact", link: "/contact" },
];

const socialMedias = [
  { icon: "twitter", link: "https://twitter.com" },
  { icon: "linkedin", link: "https://linkedin.com" },
] as FooterProps["socialMedias"];

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
    expect(screen.getByLabelText("social media twitter")).toBeInTheDocument();
    expect(screen.getByLabelText("social media linkedin")).toBeInTheDocument();
  });
});
