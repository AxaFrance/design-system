import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import {
  ContentItemCommonProps,
  ContentItemMonoCommon,
  getContentItemCoreProps,
} from "../ContentItemMonoCommon";
import { Icon } from "../../Icon/IconCommon";
import { BasePicture } from "../../BasePicture/BasePictureCommon";

describe("getContentItemCoreProps", () => {
  it("returns correct props for type 'icon'", () => {
    const props = {
      type: "icon",
      icon: "test-icon.svg",
      title: "Icon Title",
      subtitle1: "Primary Subtitle",
      subtitle2: "Secondary Subtitle",
      IconComponent: Icon,
      BasePictureComponent: BasePicture,
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
      BasePictureComponent: BasePicture,
    } as ContentItemCommonProps;

    const result = getContentItemCoreProps(props);

    expect(result.title).toBe("Picture Title");
    expect(result.subtitle).toBe("Picture Subtitle");
    expect(result.leftComponent).toBeTruthy();
  });
});

describe("ContentItemMonoCommon Component", () => {
  it("renders correctly for type 'icon'", () => {
    render(
      <ContentItemMonoCommon
        type="icon"
        icon="test-icon.svg"
        title="Icon Title"
        subtitle1="Primary Subtitle"
        subtitle2="Secondary Subtitle"
        IconComponent={Icon}
        BasePictureComponent={BasePicture}
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
        BasePictureComponent={BasePicture}
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
        BasePictureComponent={BasePicture}
      />,
    );

    expect(screen.getByText("Stick Title")).toBeInTheDocument();
    expect(screen.getByText("Stick Subtitle")).toBeInTheDocument();
  });
});
