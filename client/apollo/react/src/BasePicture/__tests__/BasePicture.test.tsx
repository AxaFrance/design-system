import logo from "@axa-fr/design-system-apollo-css/logo-axa.svg";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { BasePicture } from "../BasePictureCommon";

describe("BasePicture component", () => {
  it("should render with default class name", () => {
    render(<BasePicture />);
    const imgElement = screen.getByRole("presentation");
    expect(imgElement).toHaveClass("af-basepicture");
  });

  it("should render with custom class name", () => {
    render(<BasePicture className="custom-class" />);
    const imgElement = screen.getByRole("presentation");
    expect(imgElement).toHaveClass("custom-class");
  });

  it("should render with default src", () => {
    render(<BasePicture />);
    const imgElement = screen.getByRole("presentation");
    expect(imgElement).toHaveAttribute("src", logo);
  });

  it("should render with set src", () => {
    render(<BasePicture src="https://www.axa.fr/" />);
    const imgElement = screen.getByRole("presentation");
    expect(imgElement).toHaveAttribute("src", "https://www.axa.fr/");
  });
});
