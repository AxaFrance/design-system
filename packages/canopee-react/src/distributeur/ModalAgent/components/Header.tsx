import closeIcon from "@material-symbols/svg-400/outlined/close.svg";
import {
  type MouseEventHandler,
  type ReactNode,
  useContext,
  useEffect,
  useId,
} from "react";
import { Svg } from "../../../distributeur";
import { getClassName } from "../../utilities/helpers/getClassName";
import { ModalTitleContext } from "../ModalTitleContext";

export type HeaderProps = React.HTMLAttributes<HTMLDivElement> & {
  /**
   * Text displayed in the header, overrides `title` if both are set.
   * Inside a `Modal` without `title`, it also names the dialog.
   */
  children?: ReactNode;
  /**
   * Callback function called when the close button is clicked.
   */
  onCancel: MouseEventHandler<HTMLButtonElement>;
  /**
   * Aria label for the close button, used for accessibility.
   */
  closeButtonAriaLabel?: string;
  /**
   * Prop to override the style of the header. Will totally remove the default styles.
   */
  className?: string;
};

const Header = ({
  className,
  closeButtonAriaLabel = "Fermer la boite de dialogue",
  onCancel,
  children,
  ...props
}: HeaderProps) => {
  const componentClassName = getClassName({
    baseClassName: "af-modal__header",
    className,
  });
  const modalTitle = useContext(ModalTitleContext);
  const titleId = useId();

  useEffect(() => modalTitle?.registerTitle(titleId), [modalTitle, titleId]);

  return (
    <header className={componentClassName} {...props}>
      <h4
        className="af-modal__header-title"
        id={modalTitle ? titleId : undefined}
      >
        {children}
      </h4>
      <button
        className="af-modal__header-close-btn"
        type="button"
        aria-label={closeButtonAriaLabel}
        onClick={onCancel}
      >
        <Svg src={closeIcon} />
      </button>
    </header>
  );
};

export { Header };
