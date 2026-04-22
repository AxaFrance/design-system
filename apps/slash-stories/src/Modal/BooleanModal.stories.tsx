import { BooleanModal } from "@axa-fr/canopee-react/distributeur";
import { useRef } from "react";
import { fn } from "storybook/test";
import preview from "../../.storybook/preview";

const booleanModalMeta = preview.meta({
  title: "Components/Modal",
  component: BooleanModal,
  args: {
    open: false,
    title: "Boolean Modal title",
    id: "boolean-modal",
    children: (
      <p>
        Reprehenderit sit quis aute nisi consequat consequat mollit. Commodo in
        aliquip consectetur nulla sit anim. Pariatur minim commodo enim ea eu
        laborum culpa laboris. Labore labore irure ipsum consequat enim officia
        anim ipsum aliqua excepteur qui sint. Duis sint do culpa adipisicing
        dolor adipisicing ea dolore aute nisi quis ullamco aliquip occaecat.
        Aute ut mollit amet.
      </p>
    ),
    cancelTitle: "Cancel",
    submitTitle: "Submit",
    onSubmit: fn(),
    onCancel: fn(),
    size: undefined,
  },
});

export const BooleanModalStory = booleanModalMeta.story({
  name: "Boolean Modal",
  render: ({ ...args }) => {
    const ref = useRef<HTMLDialogElement>(null);
    return (
      <>
        <button type="button" onClick={() => ref.current?.showModal()}>
          Open modal
        </button>
        <BooleanModal
          ref={ref}
          {...args}
          onCancel={(e) => {
            args.onCancel?.(
              e as unknown as React.MouseEvent<HTMLButtonElement>,
            );
            ref.current?.close();
          }}
          onSubmit={(e) => {
            args.onSubmit?.(
              e as unknown as React.MouseEvent<HTMLButtonElement>,
            );
            ref.current?.close();
          }}
        >
          {args.children}
        </BooleanModal>
      </>
    );
  },
});
