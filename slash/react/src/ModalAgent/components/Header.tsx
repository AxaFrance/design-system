import type { MouseEventHandler } from "react";
import { getComponentClassName } from "../../slash";

export type HeaderProps = React.HTMLAttributes<HTMLDivElement> & {
  className?: string;
  onCancel: MouseEventHandler<HTMLButtonElement>;
  title?: string;
  classModifier?: string;
  closeButtonAriaLabel?: string;
};

const Header = ({
  className,
  classModifier,
  title,
  closeButtonAriaLabel = "Fermer la boite de dialogue",
  onCancel,
  ...props
}: HeaderProps) => {
  const componentClassName = getComponentClassName(
    className,
    classModifier,
    "af-modal__header",
  );

  return (
    <header className={componentClassName} {...props}>
      <h4 className="af-modal__header-title">{title}</h4>
      <button
        className="af-modal__header-close-btn"
        type="button"
        aria-label={closeButtonAriaLabel}
        onClick={onCancel}
      >
        <span className="glyphicon glyphicon-close" aria-hidden="true" />
      </button>
    </header>
  );
};

export { Header };
