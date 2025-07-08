import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
import { type ComponentProps, type PropsWithChildren, useRef } from "react";
import { describe, test } from "vitest";
import { ModalBody, ModalFooter, ModalHeader } from "..";
import { Modal, ModalProps } from "../Modal";

type Props = Pick<
  ModalProps & ComponentProps<typeof ModalHeader>,
  "onOutsideTap" | "onCancel" | "classModifier" | "size"
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
    test.each(["lg", "sm"])(
      "classModifier should apply '%s' size class",
      async (modifier) => {
        const onOutsideTap = vitest.fn();
        const onCancel = vitest.fn();
        render(
          <TestModal
            onOutsideTap={onOutsideTap}
            onCancel={onCancel}
            classModifier={modifier}
          />,
        );

        await userEvent.click(
          screen.getByRole("button", { name: /open modal/i }),
        );

        expect(
          screen.getByRole("dialog", {
            name: /my aria-title/i,
          }),
        ).toHaveClass(`af-modal--${modifier}`);
      },
    );
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

    test("should prioritize size over classModifier", async () => {
      const onOutsideTap = vitest.fn();
      const onCancel = vitest.fn();
      render(
        <TestModal
          onOutsideTap={onOutsideTap}
          onCancel={onCancel}
          classModifier="sm"
          size="lg"
        />,
      );

      await userEvent.click(
        screen.getByRole("button", { name: /open modal/i }),
      );

      expect(
        screen.getByRole("dialog", {
          name: /my aria-title/i,
        }),
      ).toHaveClass("af-modal--lg");
    });

    test("should apply classModifier different than lg/sm if size is set", async () => {
      const onOutsideTap = vitest.fn();
      const onCancel = vitest.fn();
      render(
        <TestModal
          onOutsideTap={onOutsideTap}
          onCancel={onCancel}
          classModifier="custom-class"
          size="lg"
        />,
      );

      await userEvent.click(
        screen.getByRole("button", { name: /open modal/i }),
      );

      expect(
        screen.getByRole("dialog", {
          name: /my aria-title/i,
        }),
      ).toHaveClass("af-modal--lg");
      expect(
        screen.getByRole("dialog", {
          name: /my aria-title/i,
        }),
      ).toHaveClass("af-modal--custom-class");
    });
  });
});

describe("ModalHeader", () => {
  describe("Backward compatibility", () => {
    test("should render the header with title", () => {
      render(
        <ModalHeader
          onCancel={() => {}}
          closeButtonAriaLabel="close"
          title="My Modal Title"
        />,
      );

      expect(screen.getByText(/my modal title/i)).toBeInTheDocument();
    });

    test("children should override title", () => {
      render(
        <ModalHeader
          onCancel={() => {}}
          closeButtonAriaLabel="close"
          title="My Modal Title"
        >
          <span>My Custom Title</span>
        </ModalHeader>,
      );

      expect(screen.getByText(/my custom title/i)).toBeInTheDocument();
      expect(screen.queryByText(/my modal title/i)).not.toBeInTheDocument();
    });
  });

  test("classmodifier should add a new class", () => {
    render(
      <ModalHeader
        onCancel={() => {}}
        closeButtonAriaLabel="close"
        classModifier="custom-class"
      >
        My Modal Title
      </ModalHeader>,
    );

    const banner = screen.getByRole("banner");
    expect(banner).toHaveClass("af-modal__header");
    expect(banner).toHaveClass("af-modal__header--custom-class");
  });

  test("should override className", () => {
    render(
      <ModalHeader
        onCancel={() => {}}
        closeButtonAriaLabel="close"
        className="custom-header-class"
        classModifier="custom-modifier"
      >
        My Modal Title
      </ModalHeader>,
    );

    const banner = screen.getByRole("banner");
    expect(banner).toHaveClass("custom-header-class");
    expect(banner).toHaveClass("custom-header-class--custom-modifier");
    expect(banner).not.toHaveClass("af-modal__header");
  });
});

describe("ModalBody", () => {
  test("classmodifier should add a new class", () => {
    render(<ModalBody classModifier="custom-class">My Modal Body</ModalBody>);

    const body = screen.getByText(/My Modal Body/i);
    expect(body).toHaveClass("af-modal__body");
    expect(body).toHaveClass("af-modal__body--custom-class");
  });

  test("should override className", () => {
    render(
      <ModalBody className="custom-body-class" classModifier="custom-modifier">
        My Modal Body
      </ModalBody>,
    );

    const body = screen.getByText(/My Modal Body/i);
    expect(body).toHaveClass("custom-body-class");
    expect(body).toHaveClass("custom-body-class--custom-modifier");
    expect(body).not.toHaveClass("af-modal__body");
  });
});

describe("ModalFooter", () => {
  test("classmodifier should add a new class", () => {
    render(
      <ModalFooter classModifier="custom-class">My Modal Footer</ModalFooter>,
    );

    const footer = screen.getByText(/my modal footer/i);
    expect(footer).toHaveClass("af-modal__footer");
    expect(footer).toHaveClass("af-modal__footer--custom-class");
  });
  test("should override className", () => {
    render(
      <ModalFooter
        className="custom-footer-class"
        classModifier="custom-modifier"
      >
        My Modal Footer
      </ModalFooter>,
    );

    const footer = screen.getByText(/my modal footer/i);
    expect(footer).toHaveClass("custom-footer-class");
    expect(footer).toHaveClass("custom-footer-class--custom-modifier");
    expect(footer).not.toHaveClass("af-modal__footer");
  });
});
