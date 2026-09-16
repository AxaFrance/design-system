import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
import { type ComponentProps, type PropsWithChildren, useRef } from "react";
import { describe, test } from "vitest";
import { ModalBody, ModalFooter, ModalHeader } from "..";
import { Modal, type ModalProps } from "../Modal";

type Props = Pick<
  ModalProps & ComponentProps<typeof ModalHeader>,
  "onOutsideTap" | "onCancel" | "size"
>;

const TestModal = ({
  onOutsideTap,
  onCancel,
  children = "my body content",
  ...props
}: PropsWithChildren<Props>) => {
  const ref = useRef<HTMLDialogElement>(null);
  return (
    <>
      <button type="button" onClick={() => ref.current?.showModal()}>
        Open Modal
      </button>
      <Modal
        onOutsideTap={onOutsideTap}
        title="my aria-title"
        ref={ref}
        {...props}
      >
        <ModalHeader onCancel={onCancel} closeButtonAriaLabel="cancelButton">
          My Modal Title
        </ModalHeader>
        <ModalBody>{children}</ModalBody>
        <ModalFooter>
          <button type="button" className="af-button af-button--primary">
            Save
          </button>
          <button type="button" className="af-button af-button--secondary">
            Cancel
          </button>
        </ModalFooter>
      </Modal>
    </>
  );
};

describe("Modal", () => {
  test("should be in the document with title", async () => {
    const onOutsideTap = vitest.fn();
    const onCancel = vitest.fn();
    render(<TestModal onOutsideTap={onOutsideTap} onCancel={onCancel} />);

    await userEvent.click(screen.getByRole("button", { name: /open modal/i }));

    expect(
      screen.getByRole("dialog", {
        name: /my aria-title/i,
      }),
    ).toBeInTheDocument();
  });

  test("should call onOutsideTap when clicking outside the modal", async () => {
    const onOutsideTap = vitest.fn();
    const onCancel = vitest.fn();
    render(<TestModal onOutsideTap={onOutsideTap} onCancel={onCancel} />);

    await userEvent.click(screen.getByRole("button", { name: /open modal/i }));
    // Click outside the modal is simulated by clicking the dialog itself
    await userEvent.click(
      screen.getByRole("dialog", {
        name: /my aria-title/i,
      }),
    );

    expect(onOutsideTap).toHaveBeenCalledTimes(1);
  });

  test("should call onCancel when clicking the cancel button", async () => {
    const onOutsideTap = vitest.fn();
    const onCancel = vitest.fn();
    render(<TestModal onOutsideTap={onOutsideTap} onCancel={onCancel} />);

    await userEvent.click(screen.getByRole("button", { name: /open modal/i }));
    await userEvent.click(
      screen.getByRole("button", { name: /cancelbutton/i }),
    );

    expect(onCancel).toHaveBeenCalledTimes(1);
  });

  test("should render the modal body and footer", async () => {
    const onOutsideTap = vitest.fn();
    const onCancel = vitest.fn();
    render(<TestModal onOutsideTap={onOutsideTap} onCancel={onCancel} />);

    await userEvent.click(screen.getByRole("button", { name: /open modal/i }));

    expect(screen.getByText(/my body content/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /save/i })).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /^cancel$/i }),
    ).toBeInTheDocument();
  });

  test("should be accessible", async () => {
    const onOutsideTap = vitest.fn();
    const onCancel = vitest.fn();
    const { container } = render(
      <TestModal onOutsideTap={onOutsideTap} onCancel={onCancel} />,
    );

    await userEvent.click(screen.getByRole("button", { name: /open modal/i }));

    expect(await axe(container)).toHaveNoViolations();
  });

  describe("Size", () => {
    test.each(["lg", "sm"] as const)(
      "size prop should apply '%s' size class",
      async (size) => {
        const onOutsideTap = vitest.fn();
        const onCancel = vitest.fn();
        render(
          <TestModal
            onOutsideTap={onOutsideTap}
            onCancel={onCancel}
            size={size}
          />,
        );

        await userEvent.click(
          screen.getByRole("button", { name: /open modal/i }),
        );

        expect(
          screen.getByRole("dialog", {
            name: /my aria-title/i,
          }),
        ).toHaveClass(`af-modal--${size}`);
      },
    );
  });
});

describe("ModalHeader", () => {
  test("should render its children", () => {
    render(
      <ModalHeader onCancel={() => {}} closeButtonAriaLabel="close">
        <span>My Custom Title</span>
      </ModalHeader>,
    );

    expect(screen.getByText(/my custom title/i)).toBeInTheDocument();
  });

  test("should support a custom class", () => {
    render(
      <ModalHeader
        onCancel={() => {}}
        closeButtonAriaLabel="close"
        className="custom-class"
      >
        My Modal Title
      </ModalHeader>,
    );

    const banner = screen.getByRole("banner");
    expect(banner).toHaveClass("af-modal__header");
    expect(banner).toHaveClass("custom-class");
  });

  test("should override className", () => {
    render(
      <ModalHeader
        onCancel={() => {}}
        closeButtonAriaLabel="close"
        className="custom-header-class"
      >
        My Modal Title
      </ModalHeader>,
    );

    const banner = screen.getByRole("banner");
    expect(banner).toHaveClass("custom-header-class");
    expect(banner).toHaveClass("af-modal__header");
  });
});

describe("ModalBody", () => {
  test("should support a custom class", () => {
    render(<ModalBody className="custom-class">My Modal Body</ModalBody>);

    const body = screen.getByText(/My Modal Body/i);
    expect(body).toHaveClass("af-modal__body");
    expect(body).toHaveClass("custom-class");
  });

  test("should override className", () => {
    render(<ModalBody className="custom-body-class">My Modal Body</ModalBody>);

    const body = screen.getByText(/My Modal Body/i);
    expect(body).toHaveClass("custom-body-class");
    expect(body).toHaveClass("af-modal__body");
  });
});

describe("ModalFooter", () => {
  test("should support a custom class", () => {
    render(<ModalFooter className="custom-class" />);

    const footer = screen.getByRole("contentinfo");
    expect(footer).toHaveClass("af-modal__footer");
    expect(footer).toHaveClass("custom-class");
  });
  test("should override className", () => {
    render(<ModalFooter className="custom-footer-class" />);

    const footer = screen.getByRole("contentinfo");
    expect(footer).toHaveClass("custom-footer-class");
    expect(footer).toHaveClass("af-modal__footer");
  });
});
