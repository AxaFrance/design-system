import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { axe } from "jest-axe";
import { DataAgent } from "../DataAgentApollo";
import type {
  ContentMonoItemIconProps,
  ContentMonoItemPictureProps,
  ContentMonoItemStickProps,
} from "../../ContentItemMono/ContentItemMonoCommon";
import type { ClickItemProps } from "../../List/ClickItem/types";
import type { TupleMax3 } from "../DataAgentCommon";

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

const contents: TupleMax3<ContentMonoItemIconProps> = [
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
    screen.getByText("Ouvert aujourd’hui de 09h00 à 13h00 et de 14h00 à 18h00"),
  ).toBeInTheDocument();
};

const clickContents: TupleMax3<ClickItemProps> = [
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

describe("DataAgentCommon", () => {
  const useIsSmallScreenMock = vi.fn().mockReturnValue(false);

  it("renders all sections with all props", () => {
    render(
      <DataAgent
        agentProps={agentProps}
        agentContractProps={contractProps}
        contents={contents}
        clickContents={clickContents}
        texteOrias={oriasText}
        useIsSmallScreenFn={useIsSmallScreenMock}
      />,
    );
    verifyAgentProps();
    verifyContractProps();
    verifyContentsProps();
    verifyClickContentsProps();
    verifyOriasText();
  });

  it("renders intro section with agent only", () => {
    render(
      <DataAgent
        agentProps={agentProps}
        useIsSmallScreenFn={useIsSmallScreenMock}
      />,
    );
    verifyAgentProps();
  });

  it("renders intro section with agent and contract", () => {
    render(
      <DataAgent
        agentProps={agentProps}
        agentContractProps={contractProps}
        useIsSmallScreenFn={useIsSmallScreenMock}
      />,
    );
    verifyAgentProps();
    verifyContractProps();
  });

  it("renders intro section with agent information", () => {
    render(
      <DataAgent
        agentProps={agentProps}
        contents={contents}
        useIsSmallScreenFn={useIsSmallScreenMock}
      />,
    );
    verifyAgentProps();
    verifyContentsProps();
  });

  it("renders intro section with agent information and action", () => {
    render(
      <DataAgent
        agentProps={agentProps}
        clickContents={clickContents}
        useIsSmallScreenFn={useIsSmallScreenMock}
      />,
    );
    verifyAgentProps();
    verifyClickContentsProps();
  });

  it("renders intro section with orias information", () => {
    render(
      <DataAgent
        agentProps={agentProps}
        texteOrias={oriasText}
        useIsSmallScreenFn={useIsSmallScreenMock}
      />,
    );
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
        useIsSmallScreenFn={useIsSmallScreenMock}
      />,
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});

describe("DataAgentCommon Mobile layout", () => {
  const useIsSmallScreenMock = vi.fn().mockReturnValue(true);

  it("renders mobile layout when isCompact is true", () => {
    render(
      <DataAgent
        agentProps={agentProps}
        agentContractProps={contractProps}
        contents={contents}
        clickContents={clickContents}
        texteOrias={oriasText}
        useIsSmallScreenFn={useIsSmallScreenMock}
        isCompact
      />,
    );
    verifyAgentProps();

    expect(screen.queryByText("Contrat rattaché")).not.toBeInTheDocument();
    expect(
      screen.queryByText(
        "Assurance Vie, Auto, Habitation, Complémentaire santé",
      ),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByText("6 place du 14 juillet 28 240 Ivry la Bataille"),
    ).not.toBeInTheDocument();
    expect(screen.queryByText("01 23 34 45 67")).not.toBeInTheDocument();
    expect(
      screen.queryByText(
        "Ouvert aujourd’hui de 09h00 à 13h00 et de 14h00 à 18h00",
      ),
    ).not.toBeInTheDocument();

    expect(screen.queryByText("Nous Contacter")).not.toBeInTheDocument();
    expect(screen.queryByText("Prendre rendez-vous")).not.toBeInTheDocument();
    expect(screen.queryByText("Voir le site-web")).not.toBeInTheDocument();
    expect(screen.queryByText(oriasText)).not.toBeInTheDocument();
  });

  it("renders default layout when isCompact is false", () => {
    render(
      <DataAgent
        agentProps={agentProps}
        agentContractProps={contractProps}
        contents={contents}
        clickContents={clickContents}
        texteOrias={oriasText}
        useIsSmallScreenFn={useIsSmallScreenMock}
        isCompact={false}
      />,
    );
    verifyAgentProps();
    verifyContractProps();
    verifyContentsProps();
    verifyClickContentsProps();
    verifyOriasText();
  });
});
