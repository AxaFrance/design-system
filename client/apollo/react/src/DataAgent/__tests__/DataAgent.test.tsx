import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import { axe } from "jest-axe";
import { DataAgent } from "../DataAgentApollo";
import type {
  ContentMonoItemIconProps,
  ContentMonoItemPictureProps,
  ContentMonoItemStickProps,
} from "../../ContentItemMono/ContentItemMonoCommon";
import type { ClickItemProps } from "../../List/ClickItem/types";

type Max3<T> = [T] | [T, T] | [T, T, T];

describe("DataAgentCommon", () => {
  const agentProps: ContentMonoItemPictureProps = {
    title: "Michel Lhote",
    subtitle: "AXA Assurance & Banque",
    type: "picture",
    picture: "agent.png",
  };

  const verifyAgentProps = () => {
    expect(screen.getByText("Michel Lhote")).toBeInTheDocument();
    expect(screen.getByText("AXA Assurance & Banque")).toBeInTheDocument();
  };

  const contractProps: ContentMonoItemStickProps = {
    title: "Contrat rattaché",
    subtitle: "Assurance Vie, Auto, Habitation, Complémentaire santé",
    type: "stick",
  };

  const verifyContractProps = () => {
    expect(screen.getByText("Contrat rattaché")).toBeInTheDocument();
    expect(
      screen.getByText("Assurance Vie, Auto, Habitation, Complémentaire santé"),
    ).toBeInTheDocument();
  };

  const contents: Max3<ContentMonoItemIconProps> = [
    {
      type: "icon",
      icon: "accountBalance",
      subtitle1: "6 place du 14 juillet 28 240 Ivry la Bataille",
      title: "",
    },
    {
      type: "icon",
      icon: "accountBalance",
      subtitle1: "01 23 34 45 67",
      title: "",
    },
    {
      type: "icon",
      icon: "accountBalance",
      subtitle1: "Ouvert aujourd’hui de 09h00 à 13h00 et de 14h00 à 18h00",
      title: "",
    },
  ];

  const verifyContentsProps = () => {
    expect(
      screen.getByText("6 place du 14 juillet 28 240 Ivry la Bataille"),
    ).toBeInTheDocument();
    expect(screen.getByText("01 23 34 45 67")).toBeInTheDocument();
    expect(
      screen.getByText(
        "Ouvert aujourd’hui de 09h00 à 13h00 et de 14h00 à 18h00",
      ),
    ).toBeInTheDocument();
  };

  const clickContents: Max3<ClickItemProps> = [
    {
      variant: "small",
      icon: "accountBalance",
      title: "Nous Contacter",
    },
    {
      variant: "small",
      icon: "accountBalance",
      title: "Prendre rendez-vous",
    },
    {
      variant: "small",
      icon: "accountBalance",
      title: "Voir le site-web",
    },
  ];

  const verifyClickContentsProps = () => {
    expect(screen.getByText("Nous Contacter")).toBeInTheDocument();
    expect(screen.getByText("Prendre rendez-vous")).toBeInTheDocument();
    expect(screen.getByText("Voir le site-web")).toBeInTheDocument();
  };

  const oriasText = "N° Orias (orias.fr) : 10057601 - 10057601";
  const verifyOriasText = () => {
    expect(screen.getByText(oriasText)).toBeInTheDocument();
  };

  it("renders all sections with all props", () => {
    render(
      <DataAgent
        agentProps={agentProps}
        agentContractProps={contractProps}
        contents={contents}
        clickContents={clickContents}
        texteOrias={oriasText}
      />,
    );
    verifyAgentProps();
    verifyContractProps();
    verifyContentsProps();
    verifyClickContentsProps();
    verifyOriasText();
  });

  it("renders intro section with agent only", () => {
    render(<DataAgent agentProps={agentProps} />);
    verifyAgentProps();
  });

  it("renders intro section with agent and contract", () => {
    render(
      <DataAgent agentProps={agentProps} agentContractProps={contractProps} />,
    );
    verifyAgentProps();
    verifyContractProps();
  });

  it("renders intro section with agent information", () => {
    render(<DataAgent agentProps={agentProps} contents={contents} />);
    verifyAgentProps();
    verifyContentsProps();
  });

  it("renders intro section with agent information and action", () => {
    render(<DataAgent agentProps={agentProps} clickContents={clickContents} />);
    verifyAgentProps();
    verifyClickContentsProps();
  });

  it("renders intro section with orias information", () => {
    render(<DataAgent agentProps={agentProps} texteOrias={oriasText} />);
    verifyAgentProps();
    verifyOriasText();
  });

  it("shouldn't have an accessibility violation", async () => {
    const { container } = render(
      <DataAgent
        agentProps={agentProps}
        agentContractProps={contractProps}
        contents={contents}
        clickContents={clickContents}
        texteOrias={oriasText}
      />,
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});
