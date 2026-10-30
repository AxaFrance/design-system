import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { Icon } from "../../Icon/IconCommon";
import {
  type ContentItemCommonProps,
  ContentItemMonoCommon,
  getContentItemCoreProps,
} from "../ContentItemMonoCommon";

describe("getContentItemCoreProps", () => {
  it("returns correct props for type 'icon'", () => {
    const props = {
      type: "icon",
      iconProps: { src: "test-icon.svg" },
      title: "Icon Title",
      subtitle1: "Primary Subtitle",
      subtitle2: "Secondary Subtitle",
      IconComponent: Icon,
    } as ContentItemCommonProps;

    const result = getContentItemCoreProps(props);

    expect(result.title).toBe("Icon Title");
    expect(result.primarySubtitle).toBe("Primary Subtitle");
    expect(result.subtitle).toBe("Secondary Subtitle");
    expect(result.leftComponent).toBeTruthy();
  });
  it("returns correct props for type 'icon' using iconProps", () => {
    const props = {
      type: "icon",
      iconProps: {
        src: "test-icon.svg",
      },
      title: "Icon Title",
      subtitle1: "Primary Subtitle",
      subtitle2: "Secondary Subtitle",
      IconComponent: Icon,
    } as ContentItemCommonProps;

    const result = getContentItemCoreProps(props);

    expect(result.title).toBe("Icon Title");
    expect(result.primarySubtitle).toBe("Primary Subtitle");
    expect(result.subtitle).toBe("Secondary Subtitle");
    expect(result.leftComponent).toBeTruthy();
  });

  it("returns correct props for type 'picture'", () => {
    const props = {
      type: "picture",
      picture: "test-picture.jpg",
      title: "Picture Title",
      subtitle: "Picture Subtitle",
      IconComponent: Icon,
    } as ContentItemCommonProps;

    const result = getContentItemCoreProps(props);

    expect(result.title).toBe("Picture Title");
    expect(result.subtitle).toBe("Picture Subtitle");
    expect(result.leftComponent).toBeTruthy();
  });
});

describe("ContentItemMonoCommon Component", () => {
  it("renders correctly icon", () => {
    render(
      <ContentItemMonoCommon
        type="icon"
        iconProps={{ src: "test-icon.svg", hasBackground: true }}
        title="Icon Title"
        subtitle1="Primary Subtitle"
        subtitle2="Secondary Subtitle"
        IconComponent={Icon}
      />,
    );

    expect(screen.getByText("Icon Title")).toBeInTheDocument();
    expect(screen.getByText("Primary Subtitle")).toBeInTheDocument();
    expect(screen.getByText("Secondary Subtitle")).toBeInTheDocument();
    expect(screen.getByTestId("icon")).toHaveAttribute(
      "data-src",
      "test-icon.svg",
    );
  });

  it("renders correctly for type 'picture'", () => {
    render(
      <ContentItemMonoCommon
        type="picture"
        picture="test-picture.jpg"
        title="Picture Title"
        subtitle="Picture Subtitle"
        IconComponent={Icon}
      />,
    );

    expect(screen.getByText("Picture Title")).toBeInTheDocument();
    expect(screen.getByText("Picture Subtitle")).toBeInTheDocument();
    expect(screen.getByRole("img")).toHaveAttribute("src", "test-picture.jpg");
    expect(screen.getByRole("img")).toHaveAttribute("alt", "Picture Title");
  });

  it("renders correctly for type 'stick'", () => {
    render(
      <ContentItemMonoCommon
        type="stick"
        title="Stick Title"
        subtitle="Stick Subtitle"
        IconComponent={Icon}
      />,
    );

    expect(screen.getByText("Stick Title")).toBeInTheDocument();
    expect(screen.getByText("Stick Subtitle")).toBeInTheDocument();
  });

  it("hides the decorative icon from assistive technologies", async () => {
    const { container } = render(
      <ContentItemMonoCommon
        type="icon"
        title="Titre"
        iconProps={{ src: "icon.svg" }}
        IconComponent={Icon}
      />,
    );

    const icon = screen.getByTestId("icon");
    expect(icon).toHaveAttribute("aria-hidden", "true");
    expect(icon).toHaveAttribute("focusable", "false");
    expect(await axe(container)).toHaveNoViolations();
  });

  it("names the icon when iconProps has an alt", () => {
    render(
      <ContentItemMonoCommon
        type="icon"
        title="Titre"
        iconProps={{ src: "icon.svg", alt: "Contrat auto" }}
        IconComponent={Icon}
      />,
    );

    expect(screen.getByRole("img", { name: "Contrat auto" })).toBe(
      screen.getByTestId("icon"),
    );
  });
});
