import {
  type ComponentProps,
  type ComponentType,
  type MouseEvent,
  type ReactNode,
  useCallback,
  useRef,
} from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import keyboardUp from "@material-symbols/svg-700/rounded/keyboard_arrow_up-fill.svg";
import { ClickIcon } from "../ClickIcon/ClickIconCommon";

type AccordionProps = {
  summary: ReactNode;
  children: ReactNode;
  isOpen?: boolean;
  summaryProps?: ComponentProps<"summary">;
  onClick?: (event: MouseEvent<HTMLDetailsElement>) => void;
  ClickIconComponent: ComponentType<ComponentProps<typeof ClickIcon>>;
} & Partial<ComponentProps<"details">>;

export const AccordionCore = ({
  summary,
  children,
  summaryProps,
  isOpen,
  onClick,
  ClickIconComponent,
  ...detailsProps
}: AccordionProps) => {
  const detailsRef = useRef<HTMLDetailsElement>(null);

  const handleToggle = useCallback(
    (event: MouseEvent<HTMLDetailsElement>) => {
      if (onClick) {
        event.preventDefault();
        onClick(event);
      }
    },
    [onClick],
  );

  const handleCollapse = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (detailsRef.current) {
      detailsRef.current.open = !detailsRef.current.open;
    }
  };

  return (
    <details
      className="af-accordion"
      ref={detailsRef}
      open={isOpen}
      {...detailsProps}
    >
      <summary
        className="af-accordion__summary"
        onClick={handleToggle}
        role="button"
        tabIndex={0}
        {...summaryProps}
      >
        {summary}
        <ClickIconComponent src={keyboardUp} onClick={handleCollapse} />
      </summary>
      <div className="af-accordion__content">{children}</div>
    </details>
  );
};
