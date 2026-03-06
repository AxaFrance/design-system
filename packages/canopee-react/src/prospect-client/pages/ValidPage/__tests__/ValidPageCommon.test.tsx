import { render, screen } from "@testing-library/react";
import { ValidPageCommon, type ValidPageProps } from "../ValidPageCommon";
import { DataAgent } from "../../../DataAgent/DataAgentApollo";
import { Link } from "../../../Link/LinkApollo";
import { ExitLayout } from "../../../Layout/ExitLayout/ExitLayoutApollo";

describe("ValidPageCommon", () => {
  const defaultProps: ValidPageProps = {
    headingProps: {
      title: "Bravo !",
      firstSubtitle: "Votre action est validée.",
    },
    children: <div>Contenu principal</div>,
    linkProps: {
      href: "/accueil",
      children: "Retour accueil",
    },
  };

  function renderValidPage(props: Partial<ValidPageProps> = {}) {
    return render(
      <ValidPageCommon
        {...defaultProps}
        {...props}
        DataAgentComponent={DataAgent}
        LinkComponent={Link}
        ExitLayoutComponent={ExitLayout}
      />,
    );
  }

  it("renders the title, subtitle and content", () => {
    renderValidPage();
    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(
      "Bravo !",
    );
    expect(screen.getByText("Votre action est validée.")).toBeInTheDocument();
    expect(screen.getByText("Contenu principal")).toBeInTheDocument();
  });

  it("renders the success icon", () => {
    renderValidPage();
    const icon = screen.getByRole("img", { hidden: true });
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveAttribute("data-src", expect.stringContaining("check"));
  });

  it("renders the DataAgent if dataAgentProps is provided", () => {
    renderValidPage({
      dataAgentProps: {
        agentProps: {
          title: "Michel Lhote",
          subtitle: "AXA Assurance & Banque",
          type: "picture",
          picture: "agent.png",
        },
      },
    });
    expect(screen.getByText("Michel Lhote")).toBeInTheDocument();
    expect(screen.getByText("AXA Assurance & Banque")).toBeInTheDocument();
    expect(
      screen.getByRole("img", { name: "Michel Lhote" }),
    ).toBeInTheDocument();
  });

  it("does not render the DataAgent if dataAgentProps is missing", () => {
    renderValidPage({ dataAgentProps: undefined });
    expect(screen.queryByText(/DataAgent:/)).not.toBeInTheDocument();
  });

  it("renders the return link with label and icon", () => {
    renderValidPage();
    const link = screen.getByRole("link", { name: /Retour accueil/ });
    expect(link).toHaveAttribute("href", "/accueil");
    expect(link).toHaveTextContent("Retour accueil");
  });

  it("does not render the return link if href is empty", () => {
    renderValidPage({
      linkProps: { ...defaultProps.linkProps, href: undefined },
    });
    expect(
      screen.queryByRole("link", { name: /Retour/ }),
    ).not.toBeInTheDocument();
  });
});
