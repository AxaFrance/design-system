import { useRef } from "react";
import { useHasScroll } from "../../utilities/hook/useHasScroll";

export type ModalCoreBodyProps = React.ComponentPropsWithoutRef<"main">;

export const ModalCoreBody = ({
  children,
  className,
  ...otherProps
}: ModalCoreBodyProps) => {
  const bodyRef = useRef<HTMLElement>(null);
  const { vertical: hasVerticalScroll } = useHasScroll(bodyRef);

  return (
    <main
      className={[
        "af-apollo-modal__body",
        hasVerticalScroll ? "af-apollo-modal__body-vertical-scroll" : undefined,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...otherProps}
      ref={bodyRef}
    >
      {children}
    </main>
  );
};
