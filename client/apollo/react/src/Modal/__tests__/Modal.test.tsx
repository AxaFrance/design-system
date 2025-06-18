import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useRef } from "react";
import { Modal, type ModalProps } from "../ModalApollo";
import type { HasScrollState } from "../../utilities/hook/useHasScroll";

vi.mock("../../utilities/hook/useHasScroll.ts", () => ({
  useHasScroll: vi.fn().mockReturnValue({
    vertical: false,
    horizontal: false,
  } satisfies HasScrollState),
}));

const onCancelMock = vi.fn();
const onSubmitMock = vi.fn();
const onCloseMock = vi.fn();

const defaultProps: ModalProps = {
  title: "Modal Title",
  children: "My content modal",
  open: true,
  onCancel: onCancelMock,
  onSubmit: onSubmitMock,
  onClose: onCloseMock,
};

const ModalDemo = (props: ModalProps) => {
  const ref = useRef<HTMLDialogElement>(null);

  return <Modal {...{ ...props, ref }}>My content modal</Modal>;
};

const getDialog = () => screen.getByRole("dialog", { hidden: true });

const expectModalOpened = async () => {
  const dialog = getDialog();
  await waitFor(() => {
    expect(defaultProps.onCancel).not.toHaveBeenCalled();
  });
  expect(dialog).toHaveAttribute("open", "true");
};

const expectModalClosed = async () => {
  const dialog = getDialog();
  await waitFor(() => {
    expect(defaultProps.onCancel).toHaveBeenCalled();
  });
  expect(dialog).toHaveAttribute("open", undefined);
};

describe("Modal", () => {
  beforeEach(() => {
    onCancelMock.mockReset();
    onSubmitMock.mockReset();
    onCloseMock.mockReset();
  });

  it.each`
    open     | expected
    ${true}  | ${"display"}
    ${false} | ${"hide"}
  `("Should $expected modal when open : $open", ({ open }) => {
    render(<ModalDemo {...{ ...defaultProps, open }} />);

    if (open) {
      expectModalOpened();
    } else {
      expectModalClosed();
    }
  });

  it.each`
    name
    ${"Annuler"}
    ${undefined}
  `("Should have cancel button when cancelTitle : $name", ({ name }) => {
    render(
      <ModalDemo
        {...defaultProps}
        secondaryButtonProps={{
          children: name,
        }}
      />,
    );
    const button = screen.queryByRole("button", {
      name: "Annuler",
    });

    if (name) {
      expect(button).toBeInTheDocument();
    } else {
      expect(button).not.toBeInTheDocument();
    }
  });

  it.each`
    name
    ${"Valider"}
    ${undefined}
  `("Should have submit button when submitTitle : $name", ({ name }) => {
    render(
      <ModalDemo {...defaultProps} primaryButtonProps={{ children: name }} />,
    );
    const button = screen.queryByRole("button", {
      name: "Valider",
    });

    if (name) {
      expect(button).toBeInTheDocument();
    } else {
      expect(button).not.toBeInTheDocument();
    }
  });

  it("Should close modal when click on header close button", async () => {
    render(<ModalDemo {...defaultProps} />);
    const buttonHeaderClose = screen.getByRole("button", {
      hidden: true,
      name: /Fermer la boite de dialogue/,
    });
    await userEvent.click(buttonHeaderClose);
    expectModalClosed();
  });

  it("Should have an aria-label", () => {
    const ariaLabelValue = "My Aria Label Value";
    render(<ModalDemo {...defaultProps} aria-label={ariaLabelValue} />);
    const dialog = getDialog();
    expect(dialog).toHaveAttribute("aria-label", ariaLabelValue);
  });

  it("Should close modal when click outside", async () => {
    render(<ModalDemo {...defaultProps} />);
    const dialog = getDialog();
    await userEvent.click(dialog);
    expectModalClosed();
  });

  it("Shound not close modal when click inside", async () => {
    render(<ModalDemo {...defaultProps} />);
    const title = screen.getByText(defaultProps.title);
    await userEvent.click(title);
    expectModalOpened();
  });

  it("Should close modal when press escape key", async () => {
    render(<ModalDemo {...defaultProps} />);
    await userEvent.keyboard("{esc}");
    expectModalClosed();
  });
});
