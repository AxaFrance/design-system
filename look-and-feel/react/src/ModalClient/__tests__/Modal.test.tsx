import { render, screen, waitFor } from "@testing-library/react";
import { Modal } from "..";
import { TActionButton } from "../type";

const defaultProps = {
  title: "Modal Title",
  isOpen: true,
  setIsOpen: vi.fn(),
  onClickOutside: vi.fn(),
  onClose: vi.fn(),
};

const actions = {
  primary: {
    text: "Save",
    callback: vi.fn(),
  },
  secondary: {
    text: "Cancel",
    callback: vi.fn(),
  },
  tertiary: {
    text: "Reset",
    callback: vi.fn(),
  },
};

describe("Modal", () => {
  beforeEach(() => {
    defaultProps.setIsOpen.mockReset();
    defaultProps.onClickOutside.mockReset();
    defaultProps.onClose.mockReset();
  });

  it.each`
    isOpen
    ${true}
    ${false}
  `("renders modal isOpen $isOpen", ({ isOpen }) => {
    render(<Modal {...defaultProps} isOpen={isOpen} />);
    const dialog = screen.getByRole("dialog", {
      hidden: true,
    });
    waitFor(() =>
      expect(dialog).toHaveStyle(`display: ${isOpen ? "block" : "none"}`),
    );
  });

  it("renders close modal", () => {
    render(<Modal {...defaultProps} />);
    const button = screen.getByRole("button", {
      hidden: true,
    });
    button?.click();
    expect(defaultProps.setIsOpen).toHaveBeenCalledWith(false);
  });

  it("renders close modal outside", () => {
    render(<Modal {...defaultProps} />);
    const dialog = screen.getByRole("dialog", {
      hidden: true,
    });
    dialog?.click();
    expect(defaultProps.onClickOutside).toHaveBeenCalled();
    expect(defaultProps.onClose).not.toHaveBeenCalled();
    expect(defaultProps.setIsOpen).toHaveBeenCalledWith(false);
  });

  it("renders close modal outside without clickOutside function", () => {
    render(<Modal {...defaultProps} onClickOutside={undefined} />);
    const dialog = screen.getByRole("dialog", {
      hidden: true,
    });
    dialog?.click();
    expect(defaultProps.onClose).toHaveBeenCalled();
    expect(defaultProps.setIsOpen).toHaveBeenCalledWith(false);
  });

  it("renders not close modal when click inside modal", () => {
    render(<Modal {...defaultProps} />);
    const titleDiv = screen.getByText(defaultProps.title);
    titleDiv?.click();
    expect(defaultProps.onClickOutside).not.toHaveBeenCalled();
    expect(defaultProps.onClose).not.toHaveBeenCalled();
    expect(defaultProps.setIsOpen).not.toHaveBeenCalled();
  });

  it.each`
    actionType
    ${"primary"}
    ${"secondary"}
    ${"tertiary"}
  `(
    "renders close modal when actions $actionType callback",
    ({ actionType }: { actionType: keyof TActionButton }) => {
      render(<Modal {...defaultProps} actions={actions} />);
      const actionButton = screen.getByRole("button", {
        hidden: true,
        name: actions[actionType].text,
      });
      actionButton?.click();
      expect(actions[actionType].callback).toHaveBeenCalled();
      expect(defaultProps.onClickOutside).not.toHaveBeenCalled();
      expect(defaultProps.onClose).not.toHaveBeenCalled();
      expect(defaultProps.setIsOpen).toHaveBeenCalledWith(false);
    },
  );
});
