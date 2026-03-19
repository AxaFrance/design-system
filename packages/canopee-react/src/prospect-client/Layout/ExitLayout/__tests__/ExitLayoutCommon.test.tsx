import { render, screen } from "@testing-library/react";
import check from "@material-symbols/svg-400/rounded/check.svg";
import { ExitLayoutCommon } from "../ExitLayoutCommon";
import { Heading } from "../../../Heading/HeadingApollo";
import { Icon } from "../../../Icon/IconApollo";

describe("ExitLayoutCommon", () => {
  const defaultProps = {
    headingProps: {
      title: "Votre action est en cours",
      firstSubtitle: "Nous traitons votre demande",
    },
    children: <div>Contenu principal</div>,
    HeadingComponent: Heading,
    IconComponent: Icon,
  };

  it("renders the title and subtitle", () => {
    render(<ExitLayoutCommon {...defaultProps} />);
    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(
      "Votre action est en cours",
    );
    expect(screen.getByText("Nous traitons votre demande")).toBeInTheDocument();
  });

  it("renders content when provided", () => {
    render(
      <ExitLayoutCommon {...defaultProps}>
        <ExitLayoutCommon.Content>
          <p>Contenu personnalisé</p>
        </ExitLayoutCommon.Content>
      </ExitLayoutCommon>,
    );
    expect(screen.getByText("Contenu personnalisé")).toBeInTheDocument();

    const agentElements = document.querySelectorAll(".af-exit-page__agent");
    expect(agentElements).toHaveLength(0);

    const actionElements = document.querySelectorAll(".af-exit-page__actions");
    expect(actionElements).toHaveLength(0);
  });

  it("renders icon when provided", () => {
    render(
      <ExitLayoutCommon
        {...defaultProps}
        iconProps={{
          src: check,
          hasBackground: true,
          variant: "success",
        }}
      />,
    );
    const icon = screen.getByRole("img", { hidden: true });
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveAttribute("data-src", expect.stringContaining("check"));
  });

  it("renders agent section when Agent component is provided", () => {
    render(
      <ExitLayoutCommon {...defaultProps}>
        <ExitLayoutCommon.Agent>
          <div>Agent Michel Lhote</div>
        </ExitLayoutCommon.Agent>
      </ExitLayoutCommon>,
    );
    expect(screen.getByText("Agent Michel Lhote")).toBeInTheDocument();
  });

  it("renders action section when Action component is provided", () => {
    render(
      <ExitLayoutCommon {...defaultProps}>
        <ExitLayoutCommon.Action>
          <button type="button">Retour accueil</button>
        </ExitLayoutCommon.Action>
      </ExitLayoutCommon>,
    );
    expect(
      screen.getByRole("button", { name: "Retour accueil" }),
    ).toBeInTheDocument();
  });

  it("renders all sections when provided", () => {
    const { container } = render(
      <ExitLayoutCommon
        {...defaultProps}
        iconProps={{
          src: check,
          hasBackground: true,
          variant: "success",
        }}
      >
        <ExitLayoutCommon.Content>
          <p>Contenu personnalisé</p>
        </ExitLayoutCommon.Content>
        <ExitLayoutCommon.Agent>
          <div>Agent Michel Lhote</div>
        </ExitLayoutCommon.Agent>
        <ExitLayoutCommon.Action>
          <button type="button">Retour accueil</button>
        </ExitLayoutCommon.Action>
      </ExitLayoutCommon>,
    );

    const icon = screen.getByRole("img", { hidden: true });
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveAttribute("data-src", expect.stringContaining("check"));
    expect(screen.getByText("Contenu personnalisé")).toBeInTheDocument();
    expect(screen.getByText("Agent Michel Lhote")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Retour accueil" }),
    ).toBeInTheDocument();
    expect(container.querySelector(".af-exit-page")).toBeInTheDocument();
    expect(
      container.querySelector(".af-exit-page__content"),
    ).toBeInTheDocument();
    expect(container.querySelector(".af-exit-page__agent")).toBeInTheDocument();
    expect(
      container.querySelector(".af-exit-page__actions"),
    ).toBeInTheDocument();
  });

  it("renders without subtitle when firstSubtitle is not provided", () => {
    render(
      <ExitLayoutCommon
        {...defaultProps}
        headingProps={{
          ...defaultProps.headingProps,
          firstSubtitle: undefined,
        }}
      />,
    );
    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(
      "Votre action est en cours",
    );
    expect(
      screen.queryByText("Nous traitons votre demande"),
    ).not.toBeInTheDocument();
  });
});
