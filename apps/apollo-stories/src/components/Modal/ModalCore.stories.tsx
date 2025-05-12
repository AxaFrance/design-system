import "./Modal.story.scss";

import {
  Button,
  ModalCore,
  ModalCoreBody,
  ModalCoreFooter,
  ModalCoreHeader,
} from "@axa-fr/design-system-apollo-react";
import bank from "@material-symbols/svg-700/rounded/account_balance.svg";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { useRef } from "react";

const disableFromArgTable = {
  table: {
    disable: true,
  },
};
const meta: Meta<
  React.ComponentType<
    React.ComponentProps<typeof ModalCore> & {
      body?: boolean;
      footer?: boolean;
      header?: boolean;
    }
  >
> = {
  title: "Components/Modal/ModalCore",
  component: ModalCore,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    onSubmit: fn(),
    onCancel: fn(),
    onClose: fn(),
  },
  argTypes: {
    body: disableFromArgTable,
    footer: disableFromArgTable,
    header: disableFromArgTable,
  },
};
export default meta;

type TModalCoreStory = StoryObj<typeof meta>;

export const DefaultModalCore: TModalCoreStory = {
  decorators: [
    (Story, { args: { body, footer, header, ...args } }) => {
      const ref = useRef<HTMLDialogElement>(null);
      const onClose: React.ReactEventHandler<HTMLDialogElement> = (e) => {
        ref.current?.close();
        args.onClose?.(e);
      };

      const children = (
        <>
          {header && (
            <ModalCoreHeader
              headingProps={{ children: args.title }}
              iconProps={{ src: bank }}
              onClose={onClose as VoidFunction}
            />
          )}
          {body && <ModalCoreBody>{args.children}</ModalCoreBody>}
          {footer && (
            <ModalCoreFooter
              primaryButtonProps={{ children: "Valider" }}
              secondaryButtonProps={{ children: "Annuler" }}
            />
          )}
        </>
      );

      return (
        <>
          <div style={{ padding: 8 }}>
            <Button onClick={() => ref.current?.showModal()}>
              Open the modal
            </Button>
          </div>
          <Story args={{ ...{ ...args, ref, onClose, children } }} />
        </>
      );
    },
  ],
  args: {
    open: false,
    title: "Modal title",
    children: (
      <>
        <p className="paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          consectetur urna a tellus semper, id elementum ligula fermentum. In
          semper quis mi eu commodo. Vivamus in metus eros. Sed ut pellentesque
          purus. Maecenas congue ornare massa quis porttitor. Nullam ut diam
          dapibus, consequat libero eget, faucibus nibh. Etiam imperdiet metus
          at nulla fermentum semper. In ipsum urna, tempus vel lorem vel,
          venenatis malesuada dui. Cras massa ipsum, accumsan et scelerisque ut,
          vulputate at elit.
        </p>

        <p className="paragraph">
          Donec non quam neque. Nullam fermentum erat in sem fermentum euismod.
          Phasellus sollicitudin condimentum diam ut euismod. Duis nec bibendum
          metus. Ut convallis tincidunt risus. Nam vel ultricies augue. Donec
          malesuada dolor et ligula egestas, sit amet ultrices libero bibendum.
          Phasellus varius pulvinar lectus, a ultrices risus tempus ut. Aliquam
          faucibus tortor lorem, et mattis dolor efficitur quis. Pellentesque
          ipsum nunc, finibus nec velit eget, sodales lobortis leo.
        </p>
        <p className="paragraph">
          Pellentesque venenatis est quis aliquam tristique. In tincidunt orci
          ac ipsum vulputate, quis mattis orci commodo. Pellentesque at
          hendrerit felis, pulvinar porttitor lorem. Sed vulputate quis diam sit
          amet ultricies. Cras non nisl pharetra, ornare lectus sed, fringilla
          turpis. Cras molestie velit in enim pretium, id vestibulum est luctus.
          Ut mattis consequat magna, ac scelerisque massa consequat in. Proin
          euismod pulvinar congue. Donec dapibus lorem tellus, dapibus dignissim
          elit condimentum non. Donec luctus nulla a turpis mattis, vehicula
          posuere quam convallis. Nullam gravida ante rutrum purus efficitur
          hendrerit. Aenean magna tortor, cursus at ligula vel, aliquet iaculis
          arcu. Praesent varius, purus eget interdum tempor, magna nisi pretium
          neque, pharetra viverra leo neque at est.
        </p>
      </>
    ),
    header: true,
    body: true,
    footer: true,
  },
};

export const ModalCoreBodyStory: TModalCoreStory = {
  ...DefaultModalCore,
  name: "Modal Core Body",
  args: {
    ...DefaultModalCore.args,
    header: false,
    footer: false,
  },
};

export const ModalCoreFooterStory: TModalCoreStory = {
  ...DefaultModalCore,
  name: "Modal Core Footer",
  args: {
    ...DefaultModalCore.args,
    header: false,
    footer: false,
  },
};

export const ModalCoreHeaderStory: TModalCoreStory = {
  ...DefaultModalCore,
  name: "Modal Core Header",
  args: {
    ...DefaultModalCore.args,
    header: false,
    footer: false,
  },
};
