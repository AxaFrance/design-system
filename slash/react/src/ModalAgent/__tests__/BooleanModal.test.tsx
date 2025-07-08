import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { describe } from "vitest";
import { BooleanModal, BooleanModalProps } from "../BooleanModal";

type Props = Pick<BooleanModalProps, "onSubmit" | "onCancel" | "size">;

const TestModal = ({ ...props }: Props) => {
  const ref = React.useRef<HTMLDialogElement>(null);
  return (
    <div>
      <button type="button" onClick={() => ref.current?.showModal()}>
        open modal
      </button>

      <BooleanModal
        title="title"
        id="my-id"
        ref={ref}
        {...props}
        cancelTitle="Cancel"
        submitTitle="Submit"
        closeButtonAriaLabel="Close modal"
      >
        <p>Are you sure you want to proceed?</p>
      </BooleanModal>
    </div>
  );
};

describe("BooleanModal", () => {
  test("should render without crashing", async () => {
    const onCancel = vitest.fn();
    const onSubmit = vitest.fn();

    render(<TestModal onCancel={onCancel} onSubmit={onSubmit} />);

    await userEvent.click(screen.getByRole("button", { name: "open modal" }));

    // Title is set as aria-label of the dialog
    expect(
      screen.getByRole("dialog", {
        name: /title/i,
      }),
    ).toBeInTheDocument();
    // Title is displayed in the modal
    expect(
      screen.getByRole("heading", {
        name: /title/i,
      }),
    ).toBeInTheDocument();
    // Close button is present
    expect(
      screen.getByRole("button", { name: "Close modal" }),
    ).toBeInTheDocument();

    // Content is displayed in the modal
    expect(
      screen.getByText("Are you sure you want to proceed?"),
    ).toBeInTheDocument();

    // Buttons are present
    expect(screen.getByRole("button", { name: "Submit" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Cancel" })).toBeInTheDocument();
  });

  test("should call onSubmit when submit button is clicked", async () => {
    const onSubmit = vitest.fn();
    render(<TestModal onSubmit={onSubmit} onCancel={() => {}} />);

    await userEvent.click(screen.getByRole("button", { name: "open modal" }));
    await userEvent.click(screen.getByRole("button", { name: "Submit" }));

    expect(onSubmit).toHaveBeenCalledTimes(1);
  });

  test("should call onCancel when cancel button is clicked", async () => {
    const onCancel = vitest.fn();
    render(<TestModal onSubmit={() => {}} onCancel={onCancel} />);

    await userEvent.click(screen.getByRole("button", { name: "open modal" }));
    await userEvent.click(screen.getByRole("button", { name: "Cancel" }));

    expect(onCancel).toHaveBeenCalledTimes(1);
  });

  test("should call onCancel when outside tap is detected", async () => {
    const onCancel = vitest.fn();
    render(<TestModal onSubmit={() => {}} onCancel={onCancel} />);

    await userEvent.click(screen.getByRole("button", { name: "open modal" }));
    await userEvent.click(screen.getByRole("dialog")); // Simulate outside tap

    expect(onCancel).toHaveBeenCalledTimes(1);
  });

  test("should call onCancel when modal is closed", async () => {
    const onCancel = vitest.fn();
    render(<TestModal onSubmit={() => {}} onCancel={onCancel} />);

    await userEvent.click(screen.getByRole("button", { name: "open modal" }));
    await userEvent.click(screen.getByRole("button", { name: "Close modal" }));
    expect(onCancel).toHaveBeenCalledTimes(1);
  });
});
