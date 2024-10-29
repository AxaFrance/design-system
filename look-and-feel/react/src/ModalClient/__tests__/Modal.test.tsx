import { render, screen, waitFor } from "@testing-library/react";
import { ModalContainer as Modal } from "../Modal.container";
import { TActionButton } from "../type";

const defaultProps = {
  title: "Modal Title",
  isOpen: false,
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
    const { container } = render(<Modal {...defaultProps} isOpen={isOpen} />);
    expect(screen.getByText(defaultProps.title)).toBeInTheDocument();
    const dialog = container.querySelector(".af-modal");
    waitFor(() =>
      expect(dialog).toHaveStyle(`display: ${isOpen ? "block" : "none"}`),
    );
  });

  it("renders close modal", () => {
    render(<Modal {...defaultProps} />);
    const button = screen
      .getByText(defaultProps.title)
      .parentNode?.parentNode?.querySelector("button");
    button?.click();
    expect(defaultProps.setIsOpen).toHaveBeenCalledWith(false);
  });

  it("renders close modal outside", () => {
    render(<Modal {...defaultProps} />);
    const div = screen.getByText(defaultProps.title).parentNode?.parentNode
      ?.parentNode?.parentElement;
    div?.click();
    expect(defaultProps.onClickOutside).toHaveBeenCalled();
    expect(defaultProps.onClose).not.toHaveBeenCalled();
    expect(defaultProps.setIsOpen).toHaveBeenCalledWith(false);
  });

  it("renders close modal outside without clickOutside function", () => {
    render(<Modal {...defaultProps} onClickOutside={undefined} />);
    const div = screen.getByText(defaultProps.title).parentNode?.parentNode
      ?.parentNode?.parentElement;
    div?.click();
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
      const actionButton = screen.getByText(actions[actionType].text);
      actionButton?.click();
      expect(actions[actionType].callback).toHaveBeenCalled();
      expect(defaultProps.onClickOutside).not.toHaveBeenCalled();
      expect(defaultProps.onClose).not.toHaveBeenCalled();
      expect(defaultProps.setIsOpen).toHaveBeenCalledWith(false);
    },
  );
});
