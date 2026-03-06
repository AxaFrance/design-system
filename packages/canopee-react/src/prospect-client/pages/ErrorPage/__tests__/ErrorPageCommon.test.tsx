import { render, screen } from "@testing-library/react";
import { ErrorPageCommon, type ErrorPageProps } from "../ErrorPageCommon";
import { Link } from "../../../Link/LinkApollo";
import { ExitLayout } from "../../../Layout/ExitLayout/ExitLayoutApollo";

describe("ErrorPageCommon", () => {
  const defaultProps: ErrorPageProps = {
    headingProps: {
      title: "Erreur !",
      firstSubtitle: "Une erreur est survenue.",
    },
    children: <div>Contenu principal</div>,
    linkProps: {
      href: "/accueil",
      children: "Retour accueil",
    },
  };

  function renderErrorPage(props: Partial<ErrorPageProps> = {}) {
    return render(
      <ErrorPageCommon
        {...defaultProps}
        {...props}
        LinkComponent={Link}
        ExitLayoutComponent={ExitLayout}
      />,
    );
  }

  it("renders the title, subtitle and content", () => {
    renderErrorPage();
    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(
      "Erreur !",
    );
    expect(screen.getByText("Une erreur est survenue.")).toBeInTheDocument();
    expect(screen.getByText("Contenu principal")).toBeInTheDocument();
  });

  it("renders the error icon", () => {
    renderErrorPage();
    const icon = screen.getByRole("img", { hidden: true });
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveAttribute("data-src", expect.stringContaining("close"));
  });

  it("renders the return link with label and icon", () => {
    renderErrorPage();
    const link = screen.getByRole("link", { name: /Retour accueil/ });
    expect(link).toHaveAttribute("href", "/accueil");
    expect(link).toHaveTextContent("Retour accueil");
  });

  it("does not render the return link if href is empty", () => {
    renderErrorPage({
      linkProps: { href: undefined, children: "Retour accueil" },
    });
    expect(
      screen.queryByRole("link", { name: /Retour/ }),
    ).not.toBeInTheDocument();
  });
});
