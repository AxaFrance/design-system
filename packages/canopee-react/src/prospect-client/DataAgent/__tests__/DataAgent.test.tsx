import { act, fireEvent, render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
import { beforeEach, describe, expect, it, vi } from "vitest";
import type {
  ContentMonoItemIconProps,
  ContentMonoItemPictureProps,
  ContentMonoItemStickProps,
} from "../../ContentItemMono/ContentItemMonoCommon";
import type { ClickItemProps } from "../../List/ClickItem/types";
import { DataAgent } from "../DataAgentApollo";
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
    iconProps: { src: "accountBalance" },
    subtitle1: "6 place du 14 juillet 28 240 Ivry la Bataille",
    title: "",
  },
  {
    type: "icon",
    iconProps: { src: "accountBalance" },
    subtitle1: "01 23 34 45 67",
    title: "",
  },
  {
    type: "icon",
    iconProps: { src: "accountBalance" },
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

const setWindowWidth = (width: number) => {
  act(() => {
    window.innerWidth = width;
  });
  fireEvent(window, new Event("resize"));
};

describe("DataAgentCommon", () => {
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

  it("renders the agent picture as decorative", () => {
    const { container } = render(<DataAgent agentProps={agentProps} />);

    expect(
      screen.queryByRole("img", { name: "Michel Lhote" }),
    ).not.toBeInTheDocument();
    expect(container.querySelector("img")).toHaveAttribute("alt", "");
  });

  it("passes basePictureProps to the agent picture", () => {
    render(
      <DataAgent
        agentProps={{
          ...agentProps,
          basePictureProps: { alt: "Portrait de Michel Lhote" },
        }}
      />,
    );

    expect(
      screen.getByRole("img", { name: "Portrait de Michel Lhote" }),
    ).toHaveAttribute("src", "agent.png");
  });
});

describe("DataAgentCommon Mobile layout", () => {
  it("renders mobile layout when isCompact is true", () => {
    act(() => {
      window.innerHeight = 500;
      window.innerWidth = 500;
    });

    fireEvent(window, new Event("resize"));

    render(
      <DataAgent
        agentProps={agentProps}
        agentContractProps={contractProps}
        contents={contents}
        clickContents={clickContents}
        texteOrias={oriasText}
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
    act(() => {
      window.innerHeight = 500;
      window.innerWidth = 500;
    });

    fireEvent(window, new Event("resize"));

    render(
      <DataAgent
        agentProps={agentProps}
        agentContractProps={contractProps}
        contents={contents}
        clickContents={clickContents}
        texteOrias={oriasText}
        isCompact={false}
      />,
    );
    verifyAgentProps();
    verifyContractProps();
    verifyContentsProps();
    verifyClickContentsProps();
    verifyOriasText();
  });

  it("renders the compact agent picture as decorative", () => {
    const { container } = render(
      <DataAgent agentProps={agentProps} variant="compact" />,
    );

    expect(
      screen.queryByRole("img", { name: "Michel Lhote" }),
    ).not.toBeInTheDocument();
    expect(container.querySelector("img")).toHaveAttribute("alt", "");
    expect(container.querySelector("img")).toHaveAttribute("src", "agent.png");
  });

  it("passes basePictureProps to the compact agent picture", () => {
    render(
      <DataAgent
        agentProps={{
          ...agentProps,
          basePictureProps: { alt: "Portrait de Michel Lhote" },
        }}
        variant="compact"
      />,
    );

    expect(
      screen.getByRole("img", { name: "Portrait de Michel Lhote" }),
    ).toHaveAttribute("src", "agent.png");
  });
});

describe("DataAgentCommon click items", () => {
  beforeEach(() => {
    setWindowWidth(1280);
  });

  it("renders the click items in the small variant, whatever their variant", () => {
    render(
      <DataAgent
        agentProps={agentProps}
        clickContents={[
          { icon: "accountBalance", title: "Nous contacter" },
          { variant: "medium", icon: "accountBalance", title: "Rendez-vous" },
          { variant: "large", icon: "accountBalance", title: "Site web" },
        ]}
      />,
    );

    ["Nous contacter", "Rendez-vous", "Site web"].forEach((title) => {
      expect(
        screen.getByText(title).closest(".af-apollo-click-item"),
      ).toHaveClass("af-apollo-click-item--small");
    });
  });

  it("keeps the focus on a click item when the DataAgent renders again", () => {
    const renderDataAgent = () => (
      <DataAgent
        agentProps={agentProps}
        clickContents={[{ title: "Nous contacter", onClick: () => {} }]}
      />
    );
    const { rerender } = render(renderDataAgent());
    screen.getByRole("button", { name: /Nous contacter/ }).focus();

    rerender(renderDataAgent());

    expect(
      screen.getByRole("button", { name: /Nous contacter/ }),
    ).toHaveFocus();
  });
});

describe("DataAgentCommon lists", () => {
  beforeEach(() => {
    setWindowWidth(1280);
  });

  it("renders the contents and the click items as lists", () => {
    render(
      <DataAgent
        agentProps={agentProps}
        contents={contents}
        clickContents={clickContents}
      />,
    );

    const [contentList, clickList] = screen.getAllByRole("list");
    expect(within(contentList).getAllByRole("listitem")).toHaveLength(3);
    expect(within(clickList).getAllByRole("listitem")).toHaveLength(3);
  });

  it("puts a divider between the items, not after the last one", () => {
    [1, 2, 3].forEach((count) => {
      const { unmount } = render(
        <DataAgent
          agentProps={agentProps}
          contents={
            contents.slice(0, count) as TupleMax3<ContentMonoItemIconProps>
          }
          clickContents={
            clickContents.slice(0, count) as TupleMax3<ClickItemProps>
          }
        />,
      );

      screen.getAllByRole("list").forEach((list) => {
        const items = within(list).getAllByRole("listitem");
        expect(items).toHaveLength(count);
        items.forEach((item, index) => {
          expect(within(item).queryAllByRole("separator")).toHaveLength(
            index < count - 1 ? 1 : 0,
          );
        });
      });
      unmount();
    });
  });
});

describe("DataAgentCommon section and compact props", () => {
  beforeEach(() => {
    setWindowWidth(1280);
  });

  it("passes the section attributes to the root element", () => {
    render(<DataAgent agentProps={agentProps} aria-label="Votre conseiller" />);

    expect(
      screen.getByRole("region", { name: "Votre conseiller" }),
    ).toHaveClass("af-data-agent");
  });

  it("makes the compact click item interactive", async () => {
    const onClick = vi.fn();
    render(
      <DataAgent
        agentProps={agentProps}
        variant="compact"
        compactClickItemProps={{ onClick }}
      />,
    );

    await userEvent.click(screen.getByRole("button", { name: /Michel Lhote/ }));

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("keeps the compact click item static without compactClickItemProps", () => {
    render(<DataAgent agentProps={agentProps} variant="compact" />);

    expect(screen.getByText("Michel Lhote")).toBeInTheDocument();
    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });
});

describe("DataAgentCommon ORIAS mention", () => {
  beforeEach(() => {
    setWindowWidth(1280);
  });

  it("renders oriasText", () => {
    render(<DataAgent agentProps={agentProps} oriasText={oriasText} />);

    verifyOriasText();
  });

  it("prefers oriasText to the deprecated texteOrias", () => {
    render(
      <DataAgent
        agentProps={agentProps}
        oriasText={oriasText}
        texteOrias="N° Orias (orias.fr) : 00000000"
      />,
    );

    verifyOriasText();
    expect(
      screen.queryByText("N° Orias (orias.fr) : 00000000"),
    ).not.toBeInTheDocument();
  });
});
